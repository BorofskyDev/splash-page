import '../styles/style.css';
import '../styles/navbar.css';
import '../styles/hero.css';

/*********************************/
/*********    NAVBAR    **********/
/*********************************/

const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');


function toggleNav() {
    burger.classList.toggle('fa-bars')
    burger.classList.toggle('fa-times')
    nav.classList.toggle('nav-active')
}

burger.addEventListener('click', () => {
    toggleNav()
})

