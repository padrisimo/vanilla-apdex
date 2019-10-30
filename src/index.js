import Kids from "./Kids.js";
const data = require("./moks/hostAppData.json");

const App = children =>
  `<div>
    <h1>${App.data.title}</h1>
    <h2>${App.data.subTitle}</h2> 
    <span>pa</span>  
    <span>flipar</span> 
    ${children.length ? children.map(child => child).join("") : ""} 
  </div>`;

App.data = {
  title: "Vanilla Apdex",
  subTitle: "an delightful thing to look at"
};

const getHostList = data => {
  const rowList = [];
  data.map(item => rowList.push(...item.host));
  return [...new Set(rowList)];
};

const getTopAppsByHost = function(data, host) {
  return data
    .filter(item => item.host.includes(host))
    .sort(function(a, b) {
      return a.apdex - b.apdex;
    })
    .slice(-25)
    .reverse();
};

console.log(
  "getTopAppsByHost",
  getTopAppsByHost(data, "7e6272f7-098e.dakota.biz")
);

console.log("getHostList", getHostList(data));

const root = document.querySelector("#root");
root.innerHTML = App(Kids);
