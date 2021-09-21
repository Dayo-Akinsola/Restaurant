const reservationsPageHeading = () => {
    const heading = document.createElement('h2');
    heading.setAttribute('id', 'reservations-heading');
    heading.textContent = 'Reservations';

    return heading;
}

const reservationsFormName = () => {
    const form = document.createElement('form');
    const nameContainer = document.createElement('div');
    const nameLabel = document.createElement('label');
    const newLine = document.createElement('br');
    const firstNameInput = document.createElement('input');
    const lastNameInput = document.createElement('input');

    nameContainer.classList.add('input-field');
    nameContainer.id = 'name-field-container';

    nameLabel.for = 'name';
    nameLabel.textContent = 'Name*';
    nameLabel.appendChild(newLine);

    firstNameInput.id = 'first-name';
    firstNameInput.placeholder = 'First Name';
    firstNameInput.classList.add('name');

    lastNameInput.id = 'last-name';
    lastNameInput.placeholder = 'Last Name';
    lastNameInput.classList.add('name');

    const nameArray = [nameLabel, firstNameInput, lastNameInput];
    nameArray.forEach(tag => nameContainer.appendChild(tag));
    form.appendChild(nameContainer);

    return form;
}

const createFormInputField = (form, labelText, inputType, isRequired) => {
    const container = document.createElement('div');
    const label = document.createElement('label');
    const newLine = document.createElement('br');
    const input = document.createElement('input');

    container.classList.add('input-field');
    container.id = labelText.toLowerCase() + '-field-container'

    label.textContent = labelText;
    label.appendChild(newLine);

    input.id = 'reservation-' + labelText.toLowerCase();
    input.type = inputType;
    input.required = isRequired;

    const arr = [label, input];
    arr.forEach(tag => container.appendChild(tag));
    form.appendChild(container);

    return form;
}


const reservationsFormDate = (form) => {
    const dateContainer = document.createElement('div');
    const dateLabel = document.createElement('label');
    const newLine = document.createElement('br');
    const dateInput = document.createElement('input');

    dateContainer.classList.add('input-field');
    dateContainer.id = 'date-field-container';

    dateLabel.textContent = 'Date*';
    dateLabel.appendChild(newLine);

    dateInput.id = 'reservation-date';
    dateInput.type = 'date'
    dateInput.required = true;

    const dateArray = [dateLabel, dateInput];
    dateArray.forEach(tag => dateContainer.appendChild(tag));
    form.appendChild(dateContainer);

    return form;
}

const reservationsFormTime = (form) => {
    const timeContainer = document.createElement('div');
    const timeLabel = document.createElement('label');
    const newLine = document.createElement('br');
    const timeInput = document.createElement('input');

    timeContainer.classList.add('input-field');
    timeContainer.id = 'time-field-container';

    timeLabel.textContent = 'Time*';
    timeLabel.appendChild(newLine);

    timeInput.id = 'reservation-time';
    timeInput.type = 'time';
    timeInput.required = true;
    
    const timeArray = [timeLabel, timeInput];
    timeArray.forEach(tag => timeContainer.appendChild(tag));
    form.appendChild(timeContainer);

    return form
}




const createReservationsPage = () => {
    const body = document.querySelector('body');
    const reseravtionsPageDiv = document.createElement('div');
    const heading = reservationsPageHeading();
    const nameForm = reservationsFormName();
    const dateForm = reservationsFormDate(nameForm);
    const timeForm = reservationsFormTime(dateForm);

    reseravtionsPageDiv.id = 'reservations-page-container';
    reseravtionsPageDiv.appendChild(heading); reseravtionsPageDiv.appendChild(dateForm);

    body.appendChild(reseravtionsPageDiv);
}

export {createReservationsPage};