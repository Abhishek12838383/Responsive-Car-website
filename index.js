let search = document.querySelector('.search-box ');


document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.toggle('active');
}
let menu = document.querySelector('.nav-bar ');


document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}
// hide menu and search box on social
window.onscroll =() =>{
    menu.classList.remove('active');
    search.classList.remove('active');
}



// header

let header = document.querySelector('header');

window.addEventListener('scroll' , () =>{
    header.classList.toggle('shadow',window.scrolly > 0);
});