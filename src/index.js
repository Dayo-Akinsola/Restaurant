import './style.css';

import { createHeader, welcomePage, aboutSection } from './pageLoad.js';
import createMenuPage from './menuPage';

const headerTag = document.createElement('header');

const pageRender = () => {
    const navBar = document.querySelectorAll('.header-nav');

    navBar.forEach(nav => {
        nav.addEventListener('click', () => {
            if (nav.id === 'home'){
            }
        })
    })
}

const renderHeader = () => {
    createHeader(headerTag);
}

const renderHome = () => {
    welcomePage(headerTag);  
    aboutSection();
}


renderHeader();
renderHome();
pageRender();
createMenuPage();
