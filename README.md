# Passkey Provider AAGUIDs

This is a **community-driven** list of known passkey provider AAGUIDs to assist with naming passkeys in end user passkey management interfaces (e.g. account settings). **It is not intended to be used for any other purpose** and **_could go away at any time_**. 

> [!IMPORTANT]  
> When this list is officially retired at some point in the future, the contents of both `aaguid.json` and `combined_aaguid.json` will be removed, **leaving an empty object**.
>
> It is **_highly_** recommended that you add some code that checks for an empty object after fetching the document (ex: `Object.keys(aaguid).length === 0`), and notifying the appropriate team(s). This README will also be updated with details.

This does not replace [FIDO's Metadata Service (MDS)](https://fidoalliance.org/metadata/), which should continue to be used for all authoritative security details about FIDO authenticators. Some AAGUIDs in this list may not appear in FIDO MDS.

A visual explorer of the list is available here: https://passkeydeveloper.github.io/passkey-authenticator-aaguids/explorer/

## Schema

For full details, see the latest JSON schema file: [https://github.com/passkeydeveloper/passkey-authenticator-aaguids/blob/main/aaguid.json.schema](https://github.com/passkeydeveloper/passkey-authenticator-aaguids/blob/main/aaguid.json.schema)

The top level property value is the AAGUID itself. For consistency in this file, ensure it is lowercase.

Each AAGUID member has at minimum, a `name` property. This property represents the friendly name of the passkey provider for display in RP interfaces. For example, "Google Password Manager", "Dashlane", or "1Password".

Each AAGUID member can also _optionally_ contain embedded icon data, for use next to the friendly name in RP interfaces.

The properties are `icon_dark` and `icon_light`. The values of these properties must be SVG data encoded into a base64 data URI. `icon_dark` should be a version targeted at dark mode and/or dark backgrounds. `icon_light` should be a version targeted at light mode and/or light backgrounds. The image must be square. The icon must be completely vector based and cannot contain embedded images (PNG, JPG, etc).

Many web-based tools can do this encoding/formatting, including: [https://base64.guru/converter/encode/image/svg](https://base64.guru/converter/encode/image/svg) (select `Data URI` under "Output Format").

Example of the Google G icon as a base64 encoded SVG data URI:

![](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAyNy4wMDkwMDEsIC0zOS4yMzg5OTgpIj4KICAgIDxwYXRoIGZpbGw9IiM0Mjg1RjQiIGQ9Ik0gLTMuMjY0IDUxLjUwOSBDIC0zLjI2NCA1MC43MTkgLTMuMzM0IDQ5Ljk2OSAtMy40NTQgNDkuMjM5IEwgLTE0Ljc1NCA0OS4yMzkgTCAtMTQuNzU0IDUzLjc0OSBMIC04LjI4NCA1My43NDkgQyAtOC41NzQgNTUuMjI5IC05LjQyNCA1Ni40NzkgLTEwLjY4NCA1Ny4zMjkgTCAtMTAuNjg0IDYwLjMyOSBMIC02LjgyNCA2MC4zMjkgQyAtNC41NjQgNTguMjM5IC0zLjI2NCA1NS4xNTkgLTMuMjY0IDUxLjUwOSBaIi8+CiAgICA8cGF0aCBmaWxsPSIjMzRBODUzIiBkPSJNIC0xNC43NTQgNjMuMjM5IEMgLTExLjUxNCA2My4yMzkgLTguODA0IDYyLjE1OSAtNi44MjQgNjAuMzI5IEwgLTEwLjY4NCA1Ny4zMjkgQyAtMTEuNzY0IDU4LjA0OSAtMTMuMTM0IDU4LjQ4OSAtMTQuNzU0IDU4LjQ4OSBDIC0xNy44ODQgNTguNDg5IC0yMC41MzQgNTYuMzc5IC0yMS40ODQgNTMuNTI5IEwgLTI1LjQ2NCA1My41MjkgTCAtMjUuNDY0IDU2LjYxOSBDIC0yMy40OTQgNjAuNTM5IC0xOS40NDQgNjMuMjM5IC0xNC43NTQgNjMuMjM5IFoiLz4KICAgIDxwYXRoIGZpbGw9IiNGQkJDMDUiIGQ9Ik0gLTIxLjQ4NCA1My41MjkgQyAtMjEuNzM0IDUyLjgwOSAtMjEuODY0IDUyLjAzOSAtMjEuODY0IDUxLjIzOSBDIC0yMS44NjQgNTAuNDM5IC0yMS43MjQgNDkuNjY5IC0yMS40ODQgNDguOTQ5IEwgLTIxLjQ4NCA0NS44NTkgTCAtMjUuNDY0IDQ1Ljg1OSBDIC0yNi4yODQgNDcuNDc5IC0yNi43NTQgNDkuMjk5IC0yNi43NTQgNTEuMjM5IEMgLTI2Ljc1NCA1My4xNzkgLTI2LjI4NCA1NC45OTkgLTI1LjQ2NCA1Ni42MTkgTCAtMjEuNDg0IDUzLjUyOSBaIi8+CiAgICA8cGF0aCBmaWxsPSIjRUE0MzM1IiBkPSJNIC0xNC43NTQgNDMuOTg5IEMgLTEyLjk4NCA0My45ODkgLTExLjQwNCA0NC41OTkgLTEwLjE1NCA0NS43ODkgTCAtNi43MzQgNDIuMzY5IEMgLTguODA0IDQwLjQyOSAtMTEuNTE0IDM5LjIzOSAtMTQuNzU0IDM5LjIzOSBDIC0xOS40NDQgMzkuMjM5IC0yMy40OTQgNDEuOTM5IC0yNS40NjQgNDUuODU5IEwgLTIxLjQ4NCA0OC45NDkgQyAtMjAuNTM0IDQ2LjA5OSAtMTcuODg0IDQzLjk4OSAtMTQuNzU0IDQzLjk4OSBaIi8+CiAgPC9nPgo8L3N2Zz4=)

```html
data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAyNy4wMDkwMDEsIC0zOS4yMzg5OTgpIj4KICAgIDxwYXRoIGZpbGw9IiM0Mjg1RjQiIGQ9Ik0gLTMuMjY0IDUxLjUwOSBDIC0zLjI2NCA1MC43MTkgLTMuMzM0IDQ5Ljk2OSAtMy40NTQgNDkuMjM5IEwgLTE0Ljc1NCA0OS4yMzkgTCAtMTQuNzU0IDUzLjc0OSBMIC04LjI4NCA1My43NDkgQyAtOC41NzQgNTUuMjI5IC05LjQyNCA1Ni40NzkgLTEwLjY4NCA1Ny4zMjkgTCAtMTAuNjg0IDYwLjMyOSBMIC02LjgyNCA2MC4zMjkgQyAtNC41NjQgNTguMjM5IC0zLjI2NCA1NS4xNTkgLTMuMjY0IDUxLjUwOSBaIi8+CiAgICA8cGF0aCBmaWxsPSIjMzRBODUzIiBkPSJNIC0xNC43NTQgNjMuMjM5IEMgLTExLjUxNCA2My4yMzkgLTguODA0IDYyLjE1OSAtNi44MjQgNjAuMzI5IEwgLTEwLjY4NCA1Ny4zMjkgQyAtMTEuNzY0IDU4LjA0OSAtMTMuMTM0IDU4LjQ4OSAtMTQuNzU0IDU4LjQ4OSBDIC0xNy44ODQgNTguNDg5IC0yMC41MzQgNTYuMzc5IC0yMS40ODQgNTMuNTI5IEwgLTI1LjQ2NCA1My41MjkgTCAtMjUuNDY0IDU2LjYxOSBDIC0yMy40OTQgNjAuNTM5IC0xOS40NDQgNjMuMjM5IC0xNC43NTQgNjMuMjM5IFoiLz4KICAgIDxwYXRoIGZpbGw9IiNGQkJDMDUiIGQ9Ik0gLTIxLjQ4NCA1My41MjkgQyAtMjEuNzM0IDUyLjgwOSAtMjEuODY0IDUyLjAzOSAtMjEuODY0IDUxLjIzOSBDIC0yMS44NjQgNTAuNDM5IC0yMS43MjQgNDkuNjY5IC0yMS40ODQgNDguOTQ5IEwgLTIxLjQ4NCA0NS44NTkgTCAtMjUuNDY0IDQ1Ljg1OSBDIC0yNi4yODQgNDcuNDc5IC0yNi43NTQgNDkuMjk5IC0yNi43NTQgNTEuMjM5IEMgLTI2Ljc1NCA1My4xNzkgLTI2LjI4NCA1NC45OTkgLTI1LjQ2NCA1Ni42MTkgTCAtMjEuNDg0IDUzLjUyOSBaIi8+CiAgICA8cGF0aCBmaWxsPSIjRUE0MzM1IiBkPSJNIC0xNC43NTQgNDMuOTg5IEMgLTEyLjk4NCA0My45ODkgLTExLjQwNCA0NC41OTkgLTEwLjE1NCA0NS43ODkgTCAtNi43MzQgNDIuMzY5IEMgLTguODA0IDQwLjQyOSAtMTEuNTE0IDM5LjIzOSAtMTQuNzU0IDM5LjIzOSBDIC0xOS40NDQgMzkuMjM5IC0yMy40OTQgNDEuOTM5IC0yNS40NjQgNDUuODU5IEwgLTIxLjQ4NCA0OC45NDkgQyAtMjAuNTM0IDQ2LjA5OSAtMTcuODg0IDQzLjk4OSAtMTQuNzU0IDQzLjk4OSBaIi8+CiAgPC9nPgo8L3N2Zz4=
```

## Contributing

If you represent a passkey provider, you can add your AAGUID by creating a pull request. Be sure to validate your changes using a JSON Schema tool (ajv, for example). A validation will also take place when your PR is created.

Please be sure your GitHub profile is complete with an organization name, and contact information in your organization's realm (e.g. company email). If that is not possible, you may be asked to verify out of band.
