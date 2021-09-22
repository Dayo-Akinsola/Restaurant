import { renderContent, renderTextSection, renderImage } from "./helpers";

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
const dummyText2 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." 
// Renders the top part of the home page when the page is loaded.
const welcomeSection = () => {
    const body = document.querySelector('body');
    const contentContainer = document.createElement('div');
    const headerTag = document.createElement('header');


    contentContainer.setAttribute('id', 'content-container');
    contentContainer.appendChild(headerTag);

    const welcome = renderContent('welcome', 'welcome-text', 'Welcome to Otit&#7885', 'span');
    const headlineDiv = renderContent('head', 'headline', 'Authentic Nigerian Cuisine', 'h1');

    const elementArray = [welcome, headlineDiv];
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

    const textDiv1 = renderTextSection(dummyText, 'About Us');
    const textDiv2 = renderTextSection(dummyText2, 'Our Mission');


    const aboutSectionArray = [textDiv1];
    aboutSectionArray.forEach(element => aboutSection.appendChild(element));
    const missionSectionArray = [textDiv2];
    missionSectionArray.forEach(element => missionSection.appendChild(element));

    container.appendChild(aboutSection); container.appendChild(missionSection);

    body.appendChild(container);
}

const createHomePage = () => {
    welcomeSection();
    bioSection();
}
 
export { createHomePage }