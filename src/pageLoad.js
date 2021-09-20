import { renderContent, renderTextSection, renderImage } from "./helpers";
import { createHeader } from "./index.js";

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

// Renders the top part of the home page when the page is loaded.
const welcomeSection = () => {
    const body = document.querySelector('body');
    const contentContainer = document.createElement('div');
    const aboutButton = document.createElement('button');
    const headerTag = document.createElement('header');
    const header = createHeader();


    contentContainer.setAttribute('id', 'content-container');
    contentContainer.appendChild(headerTag);

    const welcome = renderContent('welcome', 'welcome-text', 'Welcome to Otit&#7885', 'span');
    const headlineDiv = renderContent('head', 'headline', 'Authentic Nigerian Cuisine', 'h1');
    aboutButton.setAttribute('id', 'about-button'); aboutButton.textContent = 'About Us';

    const elementArray = [header, welcome, headlineDiv, aboutButton];
    elementArray.forEach(element => headerTag.appendChild(element));

    body.appendChild(contentContainer);
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

const createHomePage = () => {
    welcomeSection();
    aboutSection();
}
 
export { createHomePage }