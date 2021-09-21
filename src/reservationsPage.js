import reservationForm from "./createReservationsForm";

const reservationsPageHeading = () => {
    const heading = document.createElement('h2');
    heading.setAttribute('id', 'reservations-heading');
    heading.textContent = 'Reservations';

    return heading;
}

const createReservationsPage = () => {
    const body = document.querySelector('body');
    const reseravtionsPageDiv = document.createElement('div');
    const heading = reservationsPageHeading();
    const form = reservationForm();

    reseravtionsPageDiv.id = 'reservations-page-container';
    reseravtionsPageDiv.appendChild(heading); reseravtionsPageDiv.appendChild(form);

    body.appendChild(reseravtionsPageDiv);
}

export {createReservationsPage};