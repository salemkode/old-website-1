//globle
var body = document.querySelector("body");
//header
var navBar = document.querySelector("#navMain");
var navUl = document.querySelector("#navUl");
var navToggler = document.querySelector("#navToggler");
//article
var cardpro = document.querySelector("#cardpro");
var article = document.querySelector("article");
var nextCard = document.querySelector("#next_pro");
//footer
var footer = document.querySelector("footer");
var fooCard = document.querySelectorAll(".foo_card");
var fooToggler = document.querySelector("#fooToggler");
var a = document.querySelectorAll("a");

onResizeEvent();

window.addEventListener("resize", onResizeEvent, true);
navToggler.addEventListener("click", navTogglerClick);
fooToggler.addEventListener("click", fooTogglerClick);

function onResizeEvent() {
  if (window.innerWidth >= 442) {
    //desktop
    //header
    navBar.style.flexDirection = "row";
    navUl.style.marginRight = "0px";
    navToggler.style.display = "none";
    navUl.style.display = "inline";

    //article
    article.style.flexDirection = "row";
    cardpro.style.width = "40%";
    nextCard.style.width = "60%";
  } else {
    //phone
    //header
    navBar.style.flexDirection = "column";
    navUl.style.marginRight = "auto";
    navToggler.style.display = "inline";
    navUl.style.display = "none";

    //article
    article.style.flexDirection = "column";
    cardpro.style.width = "100%";
    nextCard.style.width = "100%";

  }

  if (window.innerWidth >= 853) {
    //desktop
    fooToggler.style.display = "none";
    //footer
    footer.style.flexDirection = "row";
    fooCard.forEach((element) => {
      element.style.display = "inline";
    });
  } else {
    //phone
    fooToggler.style.display = "inline";
    //footer
    footer.style.flexDirection = "column";

    fooCard.forEach((element) => {
      element.style.display = "none";
    });
  }
  body.style.marginBottom = footer.scrollHeight + "px";

}

function navTogglerClick() {
  if (navUl.style.display == "none") { 
    navUl.style.display = "inline";
    navToggler.classList.replace("fa-arrow-circle-down", "fa-arrow-circle-up");
  } else {
    navUl.style.display = "none";
    navToggler.classList.replace("fa-arrow-circle-up", "fa-arrow-circle-down");
  }
}
function fooTogglerClick() {
  if (fooCard[0].style.display == "none") {
    fooCard.forEach((element) => {
      element.style.display = "inline";
    });

    fooToggler.classList.replace("fa-arrow-circle-down", "fa-arrow-circle-up");
  } else {
    fooCard.forEach((element) => {
      element.style.display = "none";
    });

    fooToggler.classList.replace("fa-arrow-circle-up", "fa-arrow-circle-down");
  }
}

a.forEach((element) => {
  if (element.href != window.location.href + "#") {
    element.target = "blank";
  }
});
