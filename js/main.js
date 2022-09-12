const buttonHamburguer = document.querySelector(".menu__hamburguer");
const nav = document.querySelector(".nav");
const navLogo = document.querySelector(".nav__logo");
buttonHamburguer.addEventListener("click",()=>{
    const burguerTop = document.querySelector(".burguer__top");
    const burguerMedium = document.querySelector(".burguer__medium");
    const burguerBottom = document.querySelector(".burguer__bottom");
    if(burguerTop.classList.contains("burguer__top--active")&&burguerMedium.classList.contains("burguer__medium--active")&&burguerBottom.classList.contains("burguer__bottom--active")){
        burguerTop.classList.remove("burguer__top--active");
        burguerMedium.classList.remove("burguer__medium--active");
        burguerBottom.classList.remove("burguer__bottom--active");
        nav.classList.remove("nav--active");
        navLogo.classList.remove("hidden__logo");
    }else{
        burguerTop.classList.add("burguer__top--active");
        burguerMedium.classList.add("burguer__medium--active");
        burguerBottom.classList.add("burguer__bottom--active");
        nav.classList.add("nav--active");
        navLogo.classList.add("hidden__logo");
    }
})