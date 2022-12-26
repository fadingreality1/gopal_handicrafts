const hambuger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.container");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");

hambuger.addEventListener("click", ()=>{
    hambuger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll",()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > screen.availHeight-200){
        header.style.backgroundImage = "linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% )";
    }else{
        header.style.backgroundImage = "none";
    }
});

menu_item.forEach(item=>{
    item.addEventListener("click",()=>{
        hambuger.classList.toggle("active");
        mobile_menu.classList.toggle("active");
    });
});