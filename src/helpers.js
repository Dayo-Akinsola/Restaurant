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

// Helper function to add images to the dom
const renderImage = (id, source) => {
    const imageDiv = document.createElement('div');
    const image = document.createElement('img');

    imageDiv.setAttribute('id', id);
    imageDiv.classList.add('image-container');
    image.src = source;
    imageDiv.appendChild(image);

    return imageDiv;
}

// Takes two string parameters that what the subheading and main text will show
const renderTextSection = (text, subHeadingText) => {
    const textDiv = document.createElement('div');
    const textSubHeading = document.createElement('h2');
    const mainText = document.createElement('p');

    textDiv.classList.add('text-container');
    textSubHeading.classList.add('subheading');
    textSubHeading.textContent = subHeadingText;
    mainText.classList.add('main-text');
    mainText.textContent = text;

    textDiv.appendChild(textSubHeading); 
    textDiv.appendChild(mainText);
    return textDiv;
}

export {renderContent, renderTextSection, renderImage}