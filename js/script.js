var nav_bu = document.querySelector("#bu-nav");
var nav_ul = document.querySelector("header nav ul ");
var nav_h5 = document.querySelector("header h5 ");


nav_bu.addEventListener("click" , vi_nav);


function vi_nav(){
    if(!(nav_h5.style.display == "none")){
        nav_h5.style.display = "none";
        nav_ul.style.display = "none";
    }else{
        nav_h5.style.display = "block";
        nav_ul.style.display = "block";
    }
}