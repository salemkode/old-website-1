//header
var navBar = document.querySelector("#navMain");
var navUl = document.querySelector("#navUl");
var navToggler = document.querySelector("#navToggler");
//article
var cardpro = document.querySelector("#cardpro");
var article = document.querySelector("article");
//footer
var footer = document.querySelector("footer");


onResizeEvent();

window.addEventListener("resize", onResizeEvent, true);
navToggler.addEventListener("click" , navTogglerClick)

function onResizeEvent() {
  if (window.innerWidth >= 442) { //desktop
    //header
    navBar.style.flexDirection = "row";
    navUl.style.marginRight = "0px";
    navToggler.style.display = "none";

    //article
    article.style.flexDirection = "row";
    cardpro.style.width = "40%";
    //footer
    footer.style.flexDirection = "row";


  } else { //phone
    //header
    navBar.style.flexDirection = "column";
    navUl.style.marginRight = "auto";
    navToggler.style.display = "inline";
    navUl.style.display = "none";

    //article
    article.style.flexDirection = "column";
    cardpro.style.width = "100%";

    //footer
    footer.style.flexDirection = "column";


  }
}

function navTogglerClick() {
  if(navUl.style.display == "none"){
  navUl.style.display = "inline";
  navToggler.classList.replace("fa-arrow-circle-down" , "fa-arrow-circle-up");
  }else{
    navUl.style.display = "none";
    navToggler.classList.replace("fa-arrow-circle-up" , "fa-arrow-circle-down");
  }
}












5