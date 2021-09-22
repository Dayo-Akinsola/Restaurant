import { renderContent, renderTextSection, renderImage } from "./helpers";

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const dummyText2 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus." 
// Renders the top part of the home page when the page is loaded.
const welcomeSection = () => {
    const body = document.querySelector('body');
    const contentContainer = document.createElement('div');
    const aboutButton = document.createElement('button');
    const headerTag = document.createElement('header');


    contentContainer.setAttribute('id', 'content-container');
    contentContainer.appendChild(headerTag);

    const welcome = renderContent('welcome', 'welcome-text', 'Welcome to Otit&#7885', 'span');
    const headlineDiv = renderContent('head', 'headline', 'Authentic Nigerian Cuisine', 'h1');
    aboutButton.setAttribute('id', 'about-button'); aboutButton.textContent = 'About Us';

    const elementArray = [welcome, headlineDiv, aboutButton];
    elementArray.forEach(element => headerTag.appendChild(element));

    body.appendChild(contentContainer);
}

const bioSection = () => {
    const body = document.querySelector('body');
    const aboutSection = document.createElement('div');
    const missionSection = document.createElement('div');
    const container = document.createElement('div');

    container.id = 'bio-section-container';
    aboutSection.id = 'about-section';
    missionSection.id = 'mission-section';

    const imageOneDiv = renderImage('imageOne-container', 'https://nomadparadise.com/wp-content/uploads/2020/08/nigerian-food-09.jpg');
    const textDiv1 = renderTextSection(dummyText, 'About Us');
    const imageTwoDiv = renderImage('imageTwoDiv', 'https://nomadparadise.com/wp-content/uploads/2020/08/nigerian-food-13.jpg');
    const textDiv2 = renderTextSection(dummyText2, 'Our Mission');


    const aboutSectionArray = [textDiv1, imageOneDiv];
    aboutSectionArray.forEach(element => aboutSection.appendChild(element));
    const missionSectionArray = [textDiv2, imageTwoDiv];
    missionSectionArray.forEach(element => missionSection.appendChild(element));

    container.appendChild(aboutSection); container.appendChild(missionSection);

    body.appendChild(container);
}

const createHomePage = () => {
    welcomeSection();
    bioSection();
}
 
export { createHomePage }