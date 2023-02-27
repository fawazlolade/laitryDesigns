const menuButton = document.querySelector('#menu-bar');
const cancelButton = document.querySelector('#cancel-btn');
const navBar = document.querySelector('.responsive_nav_bar');

menuButton.addEventListener('click', ()=> {
    navBar.style.width = '100%';
});
cancelButton.addEventListener('click', ()=>{
    navBar.style.width = "0%";
})