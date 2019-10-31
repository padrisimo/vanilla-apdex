import getTopAppsByHost from "./methods/getTopAppsByHost";
import getHostList from "./methods/getHostList";
import data from "./moks/hostAppData.json";
import "./styles/styles.css";

const App = () =>
  `<div class="app">
    <div class="contaiter">
      <div class="header">
        <div class="title">
          <h1>${App.data.title}</h1>
          <div>${App.data.subTitle}</div>
        </div>
        <div class="cb-label"><input type="checkbox" name="listview">Show as a list</div> 
      </div> 
      <div class="main">
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
                  `<li class="apps-list"><span class="apdex">${tops.apdex}</span><span class="app-name">${tops.name}</span></li>`
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
  hostList: getHostList(data)
};

/* test */
console.log(
  "getTopAppsByHost",
  getTopAppsByHost(data, "7e6272f7-098e.dakota.biz")
);

console.log("getHostList", getHostList(data));
/* test end */

const root = document.querySelector("#root");
root.innerHTML = App();
