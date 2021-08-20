/* this file conglomerates the build functions for each tab
which allows for each function to be called dynamically by
calling getContent[fn] in helper.js */

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