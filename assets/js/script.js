const menuToogle = document.querySelector('nav .menu');
const navMenu = document.querySelector('.nav-list');

menuToogle.addEventListener('click', () => {
    menuToogle.classList.toggle('active')
    navMenu.classList.toggle('active')
})  

document.querySelectorAll('nav li a')
.forEach((item) => item.addEventListener('click', () =>{
    menuToogle.classList.remove('active')
    navMenu.classList.remove('active')
}))