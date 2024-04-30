let navBtn = document.querySelector(".fa-solid");
let btn = document.querySelector(".header-section-button")
let nav = document.querySelector(".header-section-nav-ul");
let links= document.querySelectorAll(".header-section-nav-ul-link");
let header = document.querySelector(".header-section");
let show = document.querySelector(".header-section-button open-i");




navBtn.onclick=function(){

    nav.classList.toggle("open");
    btn.classList.toggle("open-i");
    navBtn.classList.toggle("faBtn");
    header.classList.toggle("hide");

    for(let link of links){
        link.classList.toggle("dark");
    }

}


