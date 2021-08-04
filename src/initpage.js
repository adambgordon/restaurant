import { fill, head } from "lodash";
import * as helper from "./helper.js"

function initHeader() {
    const header = document.createElement("div");
    header.id = "header";
    header.textContent = "the brunch place";
    document.body.appendChild(header);
}

function initNav() {
    const nav = document.createElement("div");
    nav.id = "nav";
    nav.appendChild(helper.createTab("about"));
    nav.appendChild(helper.createTab("menu"));
    nav.appendChild(helper.createTab("contact"));
    document.body.appendChild(nav);
}

function initContent() {
    const content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);
    helper.activate(document.getElementById("about"));
}

function initFooter() {
    const footer = document.createElement("div");
    footer.id = "footer";

    const copyright = document.createElement("dive");
    copyright.textContent = "© 2021 adam gordon"

    footer.appendChild(copyright);
    document.body.appendChild(footer);
}

function initBackground() {
    const background = document.createElement("div");
    background.id = "background";

    const text = document.createElement("div");
    text.classList.add("background-text");
    let string = "the brunch place ";
    for (let i = 0; i < 9; i++) {
        string += string;
    }
    text.textContent = string;
    background.appendChild(text);
    document.body.appendChild(background);
}

function initPage () {
    initHeader();
    initNav();
    initContent();
    initFooter();
    initBackground();
}

export default initPage;



