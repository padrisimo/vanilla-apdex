import getTopAppsByHost from "./methods/getTopAppsByHost";
import getHostList from "./methods/getHostList";
import data from "./moks/hostAppData.json";
import "./styles/styles.css";

const App = children =>
  `<div class="app">
    <div class="contaiter">
      <div class="header">
        <div class="title">
          <h1>${App.data.title}</h1>
          <div>${App.data.subTitle}</div>
        </div>
        <div class="cb-label"><input type="checkbox" name="listview">Show as a list</div> 
      </div> 
    </div>   
  </div>`;

App.data = {
  title: "Apps by Host",
  subTitle: "for user spongebobsquarepants@krustykrab.bb"
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
