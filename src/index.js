import getTopAppsByHost from "./methods/getTopAppsByHost";
import getHostList from "./methods/getHostList";
import data from "./moks/hostAppData.json";
import "./styles/styles.css";

window.checked = false;

window.toggle = () => {
  window.checked = !window.checked;
  root.innerHTML = App();
};

window.showVersion = e => {
  e = e || window.event;
  var target = e.target || e.srcElement;
  console.log("release version: ", target.id);
};

const App = () =>
  `<div class="app">
    <div class="contaiter">
      <div class="header">
        <div class="title">
          <h1>${App.data.title}</h1>
          <div>${App.data.subTitle}</div>
        </div>
        <div class="cb-label">
          <input type="checkbox" ${
            window.checked ? "checked" : ""
          } onclick="toggle()" name="listview" class="checkbox">
          ${window.checked ? App.data.listLabel : App.data.gridLabel}
        </div> 
      </div> 
      <div class=${window.checked ? "main" : ""}>
        ${App.data.hostList
          .map(
            host => `
          <div class="card">
            <div class="card-title">${host}</div>
            <ul>
            ${getTopAppsByHost(data, host)
              .slice(0, 5)
              .map(
                tops =>
                  `<li class="apps-list">
                    <span class="apdex">${tops.apdex}</span>
                    <span 
                      class="app-name" 
                      onclick="showVersion(event)" 
                      id=${tops.version}
                    >${tops.name}</span>
                  </li>`
              )
              .join("")}
            </ul>
          </div>
          `
          )
          .join("")}
      </div> 
    </div>   
  </div>`;

App.data = {
  title: "Apps by Host",
  subTitle: "for user spongebobsquarepants@krustykrab.bb",
  hostList: getHostList(data),
  listLabel: "Show as list",
  gridLabel: "Show as an awesome grid",
  checked: false
};

App.onclick = () => alert("caca");

const root = document.querySelector("#root");
root.innerHTML = App();

/* methods for console */

window.removeAppFromHosts = appName => {
  data.filer(app => app.name !== name);
  root.innerHTML = App();
};

window.addAppToHosts = app => {
  data.push(app);
  root.innerHTML = App();
};
