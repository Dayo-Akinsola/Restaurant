import reservationForm from "./createReservationsForm";

const reservationsPageHeading = () => {
    const heading = document.createElement('h2');
    heading.setAttribute('id', 'reservations-heading');
    heading.textContent = 'Reservations';

    return heading;
}

const contactInfo = () => {
    const contactInfoContainer = document.createElement('div');
    const heading = document.createElement('h2');
    const contactText = document.createElement('span');
    const number = document.createElement('span');
    const email = document.createElement('span');
    const facebookIcon = document.createElement('a');
    const twitterIcon = document.createElement('a');
    const redditIcon = document.createElement('a');
    const socialMediaIcons = [facebookIcon, twitterIcon, redditIcon];
    const socialMediaIconsContainer = document.createElement('div');

    heading.textContent = 'Any Questions?';
    heading.id = 'contact-heading';

    contactText.textContent = 'Contact Us: ';
    contactText.id = 'contact-text';

    number.textContent = '0123456789';
    number.id = 'contact-number';

    email.textContent = 'randomemail@random.co.uk';
    email.id = 'contact-email';


    socialMediaIcons.forEach(icon => {
        icon.href = '#';
        icon.classList.add('fa');
        socialMediaIconsContainer.appendChild(icon);
    });
    facebookIcon.classList.add('fa-facebook'); 
    twitterIcon.classList.add('fa-twitter');
    redditIcon.classList.add('fa-reddit');
    socialMediaIconsContainer.classList.add('social-media-icons');

    const contactInfo = [heading, contactText, number, email, socialMediaIconsContainer];

    contactInfo.forEach(info => contactInfoContainer.appendChild(info));

    contactInfoContainer.classList.add('contact-info-container');

    return contactInfoContainer;
}

const createReservationsPage = () => {
    const body = document.querySelector('body');
    const reservationsDiv = document.createElement('div');
    const reservationsPage = document.createElement('div');
    const reservationsPageContainer= document.createElement('div');
    const contact = contactInfo();
    const heading = reservationsPageHeading();
    const form = reservationForm();

    reservationsDiv.id = 'reservations-container';
    reservationsDiv.appendChild(heading); reservationsDiv.appendChild(form);

    reservationsPage.appendChild(contact); 
    reservationsPage.appendChild(reservationsDiv);
    reservationsPage.classList.add('reservations-page');

    reservationsPageContainer.id = 'reservations-page-container';
    reservationsPageContainer.appendChild(reservationsPage);

    body.appendChild(reservationsPageContainer);
}

export {createReservationsPage};