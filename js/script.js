let nav_bu = document.querySelector("#bu-nav");
let nav_ul = document.querySelector("header nav ul ");
let nav_h5 = document.querySelector("header h5 ");


nav_bu.addEventListener("click" , vi_nav);

window.addEventListener("input" , vi_nav)
function vi_nav(){
    if(nav_h5.style.display == "flex" && window.innerWidth <= "716"){
        nav_h5.style.display = "none";
        nav_ul.style.display = "none";
    }else{
        nav_h5.style.display = "flex";
        nav_ul.style.display = "flex";
    }
}
