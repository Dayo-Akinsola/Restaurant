import './style.css';

import { createHomePage } from './pageLoad.js';
import createMenuPage from './menuPage';

// Renders header at the top of all the site's pages
const createHeader = () => {
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
            nav.setAttribute('id', 'contact');
            nav.textContent = 'Contact';
        }
        navDiv.appendChild(nav);
    }

    headerDiv.appendChild(title);
    headerDiv.appendChild(navDiv);

    return headerDiv;
}

// Loads Home page when the site os first visited
const defaultPage = () => {
    window.addEventListener('load', () => {
        createHomePage();
    })
}

const changePage = () => {
    const body = document.querySelector('body');
    const welcomeSection = document.querySelector('#content-container');
    const aboutSection = document.querySelector('#about-section');
    const menuPage = document.querySelector('#menu-page');
    const navBar = document.querySelectorAll('.header-nav');

    navBar.forEach(nav => {
        nav.addEventListener('click', () => {
            if (body.childNodes[2] === welcomeSection){
                console.log(body.childNodes[2]);
                body.removeChild(body.childNodes[2]);
                console.log(body.childNodes[2]);
                body.removeChild(body.childNodes[2]);
            }
            else body.removeChild(body.childNodes[2]);

            if (nav.id === 'home') createHomePage();
            else if (nav.id === 'menu') createMenuPage();
        })
    })


}

createHomePage();
changePage();

export { createHeader };