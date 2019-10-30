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

const getTopAppsByHost = function(data) {
  return data
    .sort(function(a, b) {
      return a.apdex - b.apdex;
    })
    .slice(-25)
    .reverse();
};
console.log(getTopAppsByHost(data));

const root = document.querySelector("#root");
root.innerHTML = App(Kids);
