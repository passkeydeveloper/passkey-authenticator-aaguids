#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE="${1:-$REPO_ROOT/combined_aaguid.json}"
OUT_DIR="${2:-$REPO_ROOT/dist}"

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

count=0
icons=0

jq -r 'to_entries[] | select(.value | type == "object" and has("name")) | @base64' "$SOURCE" | while read -r row; do
  entry=$(echo "$row" | base64 --decode)
  aaguid=$(echo "$entry" | jq -r '.key')
  name=$(echo "$entry" | jq -r '.value.name')
  icon_dark=$(echo "$entry" | jq -r '.value.icon_dark // empty')
  icon_light=$(echo "$entry" | jq -r '.value.icon_light // empty')

  dir="$OUT_DIR/$aaguid"
  mkdir -p "$dir"

  meta=$(jq -n --arg name "$name" '{name: $name}')
  has_icon=false

  for variant in dark light; do
    eval "uri=\$icon_$variant"
    [ -z "$uri" ] && continue

    mime="${uri%%\;*}"
    mime="${mime#data:}"

    case "$mime" in
      image/svg+xml) ext="svg" ;;
      image/png)     ext="png" ;;
      *)             continue ;;
    esac

    encoded="${uri#*,}"
    echo "$encoded" | base64 --decode > "$dir/icon-$variant.$ext"
    meta=$(echo "$meta" | jq --arg k "icon_$variant" --arg v "icon-$variant.$ext" '. + {($k): $v}')
    has_icon=true
  done

  echo "$meta" > "$dir/meta.json"
  count=$((count + 1))
  [ "$has_icon" = true ] && icons=$((icons + 1))
done

# Top-level index: { "aaguid": "name", ... }
jq 'to_entries | map(select(.value | type == "object" and has("name"))) | from_entries | map_values(.name)' "$SOURCE" > "$OUT_DIR/index.json"

echo "Split complete: output in $OUT_DIR"
