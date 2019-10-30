import Kids from "./Kids.js";

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

const root = document.querySelector("#root");
root.innerHTML = App(Kids);
