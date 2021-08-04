import createAbout from './about.js';
import createMenu from './menu.js';
import createContact from './contact.js';

function about() {
    console.log('called about!');
    return createAbout();
}

function menu() {
    console.log('called menu!');
    return createMenu();
}

function contact() {
    console.log('called contact!');
    return createContact();
}

export {about, menu, contact};