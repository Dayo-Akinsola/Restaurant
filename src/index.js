import './style.css';

import { createHeader, createContent, aboutSection } from './pageLoad.js';

const header = document.createElement('header');


createHeader(header);
createContent(header);
aboutSection();
