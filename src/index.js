import './style.css';

import { createHomePage } from './pageLoad.js';
import createMenuPage from './menuPage';

// Renders header at the top of all the site's pages
const createHeader = () => {
    const body = document.querySelector('body');
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    const title = document.createElement('h3');
    title.setAttribute('id', 'title');
    title.innerHTML = 'Otit&#7885';

    const navDiv = document.createElement('div');
    navDiv.classList.add('header-navs');

    for (let i = 0; i < 3; i++){
        const nav = document.createElement('span');
        nav.classList.add('header-nav');

        if (i === 0) {
            nav.setAttribute('id', 'home');
            nav.textContent = 'Home';
        }
        else if (i === 1) {
            nav.setAttribute('id', 'menu');
            nav.textContent = 'Menu';
        }
        else {
            nav.setAttribute('id', 'reservations');
            nav.textContent = 'Reservations';
        }
        navDiv.appendChild(nav);
    }

    headerDiv.appendChild(title);
    headerDiv.appendChild(navDiv);
    body.appendChild(headerDiv);
}

// Loads Home page when the site os first visited
const defaultPage = () => {
    window.addEventListener('load', () => {
        createHomePage();
    })
}

const changePage = () => {
    const welcomeSection = document.querySelector('#content-container');
    const aboutSection = document.querySelector('#about-section');
    const menuPage = document.querySelector('#menu-page');
    const navBars = document.querySelectorAll('.header-nav');
    const navBar = document.querySelector('.header');

    navBars.forEach(nav => {
        nav.addEventListener('click', () => {
            if (nav.id === 'home'){
                welcomeSection.style.display = 'block';
                aboutSection.style.display = 'flex';
                menuPage.style.display = 'none';
            } 

            else if (nav.id === 'menu'){
                welcomeSection.style.display = 'none';
                aboutSection.style.display = 'none';
                menuPage.style.display = 'block';
            }
        })
    })


}

createHeader();
createHomePage();
createMenuPage();
changePage();

export { createHeader };