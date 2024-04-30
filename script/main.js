let navBtn = document.querySelector(".fa-solid");
let btn = document.querySelector(".header-button")
let nav = document.querySelector(".header-nav-ul");
let links= document.querySelectorAll(".header-nav-ul-link");
let headingMain= document.querySelector(".heading-primary-main");
let headingEnd= document.querySelector(".heading-primary-sub");
let cookieBtn = document.querySelector(".footer-cookie-ki");
let cookie=document.querySelector(".footer-cookie")

navBtn.onclick=function(){

    nav.classList.toggle("open");
    btn.classList.toggle("open-i");
    headingMain.classList.toggle("openMain");
    headingEnd.classList.toggle("openSub");
    navBtn.classList.toggle("faBtn");


}

if ( localStorage.getItem("cookie") != "true" ) {
    cookie.style.display = "flex";                
}
else{
    cookie.style.display = "none";
}

cookieBtn.onclick=function(){
    cookie.style.display="none"
    localStorage.setItem( "cookie" , "true" );

}
