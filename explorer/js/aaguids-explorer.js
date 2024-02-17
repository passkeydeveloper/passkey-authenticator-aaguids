'use strict';

function imageTag(src) {
  return src ? "<img src='" + src + "'/>" : "";
}

function $(query) {
  return document.querySelector(query);
}

function $toggle(query, show) {
  return $(query).style.display = (show ? 'block' : 'none');
}

function $$(query) {
  return document.querySelectorAll(query);
}

function appendRow(table, html) {
  const row = document.createElement("tr");
  row.innerHTML = html;
  table.appendChild(row);
}

document.onreadystatechange = async () => {
  if (document.readyState == "complete") {

    try {
      let file, switchJsonUrl, switchJsonText;
      if (location.search === "?combined") {
        file = "combined_aaguid.json";
        switchJsonUrl = ".";
        switchJsonText = "Exclude MDS authenticators"
      } else {
        file = "aaguid.json";
        switchJsonUrl = "./?combined";
        switchJsonText = "Include MDS authenticators"
      } 
      $("#switch-json").setAttribute("href", switchJsonUrl);
      $("#switch-json").innerText = switchJsonText;
      
      const response = await fetch("../" + file);

      const json = await response.json();

      $toggle("#loading", false);
      $toggle("#main", true);
      const table = $("#aaguids");
      appendRow(table, `
      <tr>
        <th>AAGUID <br/></th>
        <th>Name <br/> 
          <input id="filter" type="text" placeholder="Filter by name..."/>
          <a id="clear-filter" href="#" title="clear">X</a>
        </th>
        <th>Icon light</th>
        <th class="dark">Icon dark</th>
      </tr>
      `);

      for (const aaguid in json) {
        if (Object.hasOwnProperty.call(json, aaguid)) {
          appendRow(table, `
          <tr>
            <td>${aaguid}</td>
            <td class="name">${json[aaguid].name}</td>
            <td class="icon">${imageTag(json[aaguid].icon_light)}</td>
            <td class="icon dark">${imageTag(json[aaguid].icon_dark)}</td>
          </tr>
          `);
        }
      }

      function applyFilter(filter) {
        $$("#aaguids tr").forEach( (row) => {
          const name = row.querySelector("td.name")?.innerText?.toLowerCase();
          const show =  !filter || (!name || name.indexOf(filter.toLowerCase()) >= 0);
          row.style.display = (show ? 'table-row' : 'none');
        });
      }

      $("#filter").addEventListener("keyup", () => {
        applyFilter($("#filter").value);
      });

      $("#clear-filter").addEventListener("click", (event) => {
        $("#filter").value = "";
        applyFilter();
        event.preventDefault();
      });

    } catch (err) {
      $toggle("#loading-error", true);
      console.error(err);
    }
  }
}
