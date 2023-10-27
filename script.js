const header = document.querySelector("header");


window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 120);
});
let menuIcon = document.querySelector(".top-btnn");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};


window.onscroll  = () => {
    menu.remove.toggle('bx-bx');
    navlist.remove.toggle('active')
  

}


