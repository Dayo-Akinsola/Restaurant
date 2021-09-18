import { renderContent, renderTextSection, renderImage } from "./helpers";

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const createHeader = (header) => {
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
            nav.setAttribute('id', 'contact');
            nav.textContent = 'Contact';
        }
        navDiv.appendChild(nav);
    }

    headerDiv.appendChild(title);
    headerDiv.appendChild(navDiv);
    header.appendChild(headerDiv)
    body.appendChild(header);
}


// Renders the top part of the home page when the page is loaded.
const createContent = (header) => {
    const body = document.querySelector('body');
    const contentContainer = document.createElement('div');
    const aboutButton = document.createElement('button');

    contentContainer.setAttribute('id', 'content-container');

    const welcome = renderContent('welcome', 'welcome-text', 'Welcome to Otit&#7885', 'span');
    const headlineDiv = renderContent('head', 'headline', 'Authentic Nigerian Cuisine', 'h1');
    aboutButton.setAttribute('id', 'about-button'); aboutButton.textContent = 'About Us';

    const elementArray = [welcome, headlineDiv, aboutButton];
    elementArray.forEach(element => contentContainer.appendChild(element));
    header.appendChild(contentContainer);
    
    body.appendChild(header);

}

const aboutSection = () => {
    const body = document.querySelector('body');
    const aboutSection = document.createElement('div');

    aboutSection.setAttribute('id', 'about-section');

    const imageOneDiv = renderImage('imageOne-container', 'https://nomadparadise.com/wp-content/uploads/2020/08/nigerian-food-09.jpg');
    const textDiv = renderTextSection(dummyText, 'About Us');
    const imageTwoDiv = renderImage('imageTwoDiv', 'https://nomadparadise.com/wp-content/uploads/2020/08/nigerian-food-13.jpg');

    const elementArray = [imageOneDiv, textDiv, imageTwoDiv];
    elementArray.forEach(element => aboutSection.appendChild(element));

    body.appendChild(aboutSection);


}
 
export { createHeader, createContent, aboutSection};    