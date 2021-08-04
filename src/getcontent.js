import createAbout from "./about.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

function about() {
    return createAbout();
}

function menu() {
    return createMenu();
}

function contact() {
    return createContact();
}

export {about, menu, contact};