const hamburger = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')

hamburger.addEventListener('click', () => {
   //Esto significa que quite o ponga la clase spread a .hamburguer dependiendo del estado que tenga
   menu.classList.toggle("spread");
});

window.addEventListener('click', e=> {
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburger){
        menu.classList.toggle("spread");
    }
}); 