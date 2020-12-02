let XHR = new XMLHttpRequest();
let tw_list = ["looding"];
let tw_index = 0;
let tw_next = document.querySelector("#tw-next");
let tw_before = document.querySelector("#tw-before");

let twP = document.querySelector("#tw-p");

XHR.open("GET", "js/import.json");

XHR.onload = function () {
  tw_list = JSON.parse(XHR.responseText).en;
  tw_index = 1;
  before();
};

XHR.send();
tw_next.addEventListener("click", next);
tw_before.addEventListener("click", before);

function next() {
  tw_index++;
  if (tw_index == tw_list.length) {
    tw_index = 0;
  }
  twP.innerHTML = tw_list[tw_index];
}

function before() {
  tw_index--;
  if (tw_index == -1) {
    tw_index = tw_list.length;
    tw_index--;
  }
  twP.innerHTML = tw_list[tw_index];
}
