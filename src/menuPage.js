import { starters, main, desserts } from "./menuItems";

const menuPageHeading = () => {
    const heading = document.createElement('h2');
    const subHeading = document.createElement('p');
    const container = document.createElement('div');
    
    heading.textContent = 'Our Menu';
    heading.setAttribute('id', 'menu-heading');
    subHeading.textContent = 'Enjoy browsing assortment of delicious, traditional nigerian food';
    subHeading.setAttribute('id', 'menu-subheading');

    container.setAttribute('id', 'menu-heading-container');
    container.appendChild(heading);
    container.appendChild(subHeading);

    return container;
}

// Displays a course and its menu items on the page
const menuPageSection = (course) => {
    const section = document.createElement('div');
    section.classList.add('menu-section');

    // Creates heading in the section
    const courseHeading = document.createElement('h2');
    courseHeading.classList.add('course-heading');
    if (course === starters) courseHeading.textContent = 'Starters';
    else if (course === main) courseHeading.textContent = 'Main';
    else if (course === desserts) courseHeading.textContent = 'Desserts';

    //Creates actual menu items and info
    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.classList.add('course-grid');
    course.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('item');
        const name = document.createElement('p');
        const description = document.createElement('p');
        const price = document.createElement('p');
        const infoArray = [name, description, price];

        name.innerHTML = item.name;
        description.textContent = item.description;
        price.innerHTML = item.price;
        
        description.style.color = 'darkGray'
        price.style.fontWeight = 'bold';

        infoArray.forEach(info => menuItem.appendChild(info));
        menuItemsDiv.appendChild(menuItem);
    })

    section.appendChild(courseHeading);
    section.appendChild(menuItemsDiv);

    return section;
}

const createMenuPage = () => {
    const body = document.querySelector('body');
    const menuPageDiv = document.createElement('div');
    menuPageDiv.setAttribute('id', 'menu-page');

    const pageHeading = menuPageHeading();
    const starterSection = menuPageSection(starters);
    const mainSection = menuPageSection(main);
    const dessertSection = menuPageSection(desserts);
    const sections = [starterSection, mainSection, dessertSection];

    menuPageDiv.appendChild(pageHeading);
    sections.forEach(section => menuPageDiv.appendChild(section));

    body.appendChild(menuPageDiv);

} 

export default createMenuPage;