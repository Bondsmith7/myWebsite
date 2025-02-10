

const navbar = document.getElementById("navbar");
let lastScrollTop = 0;


window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top = "-120px";
    } else {
        navbar.style.top = "0"
    }
    lastScrollTop = scrollTop;

    if(window.scrollY > 0){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
})