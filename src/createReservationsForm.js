const reservationsFormName = () => {
    const nameContainer = document.createElement('div');
    const nameLabel = document.createElement('label');
    const newLine = document.createElement('br');
    const firstNameInput = document.createElement('input');
    const lastNameInput = document.createElement('input');

    nameContainer.classList.add('input-field');
    nameContainer.id = 'name-field-container';

    nameLabel.for = 'name';
    nameLabel.textContent = 'Name';
    nameLabel.appendChild(newLine);

    firstNameInput.id = 'first-name';
    firstNameInput.placeholder = 'First Name';
    firstNameInput.classList.add('name');
    firstNameInput.required = true;

    lastNameInput.id = 'last-name';
    lastNameInput.placeholder = 'Last Name';
    lastNameInput.classList.add('name');
    lastNameInput.required = true;

    const nameArray = [nameLabel, firstNameInput, lastNameInput];
    nameArray.forEach(tag => nameContainer.appendChild(tag));

    return nameContainer;
}

const createFormInputField = (labelText, inputType, isRequired) => {
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

    return container;
}

const generateReservationsForm = () => {
    const form = document.createElement('form');
    const nameField = reservationsFormName();
    const dateField = createFormInputField('Date', 'date', true);
    const timeField = createFormInputField('Time', 'time', true);
    const numberOfGuests = createFormInputField('Party', 'number', true);
    const email = createFormInputField('Email', 'email', true);
    const submitButton = document.createElement('input');

    submitButton.id = 'submit-btn';
    submitButton.type = 'submit';
    submitButton.value = 'Book';

    const fieldArray = [nameField, dateField, timeField, numberOfGuests, email, submitButton];
    fieldArray.forEach(field => form.appendChild(field));

    return form;

}

export default generateReservationsForm;