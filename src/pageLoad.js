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
            nav.setAttribute('id', 'contact');
            nav.textContent = 'Contact';
        }
        navDiv.appendChild(nav);
    }

    headerDiv.appendChild(title);
    headerDiv.appendChild(navDiv);
    body.appendChild(headerDiv);
}

// Helper function for createContent to set text, id and class for an element
const renderContent = (containerID, textID, info, tag) => {
    const div = document.createElement('div');
    const text = document.createElement(tag);

    div.classList.add('content'); div.setAttribute('id', containerID);
    text.setAttribute('id', textID);
    text.innerHTML = info;
    div.appendChild(text);

    return div;
}

const createContent = () => {
    const body = document.querySelector('body');
    const contentContainer = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const aboutButton = document.createElement('button');

    contentContainer.setAttribute('id', 'content-container');

    const welcome = renderContent('welcome', 'welcome-text', 'Welcome to Otit&#7885', 'span');
    const headlineDiv = renderContent('head', 'headline', 'Authentic Nigerian Cuisine', 'h1');
    aboutButton.setAttribute('id', 'about-button'); aboutButton.textContent = 'About Us';

    const elementArray = [welcome, headlineDiv, aboutButton];
    elementArray.forEach(element => contentContainer.appendChild(element));
    
    body.appendChild(contentContainer);

}
 
export { createHeader, createContent};