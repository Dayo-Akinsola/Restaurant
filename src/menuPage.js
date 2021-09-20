import { starters, main, desserts } from "./menuItems";

const menuPageHeading = () => {
    const heading = document.createElement('h2');
    const subHeading = document.createElement('p');
    const container = document.createElement('div');
    
    heading.textContent = 'Menu';
    heading.setAttribute('id', 'menu-heading');
    subHeading.textContent = 'Browse our menu of traditional nigerian food';
    subHeading.setAttribute('id', 'menu-subheading');

    container.setAttribute('id', 'menu-heading-container');
    container.appendChild(heading);
    container.appendChild(subHeading);

    return container;
}

const createMenuPage = () => {
    const body = document.querySelector('body');
    const menuPageDiv = document.createElement('div');
    menuPageDiv.setAttribute('id', 'menu-page');

    const pageHeading = menuPageHeading();

    menuPageDiv.appendChild(pageHeading);
    body.appendChild(menuPageDiv);
} 

export default createMenuPage;