import * as helper from "./helper.js"

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


function initHeader() {
    const header = document.createElement("div");
    header.id = "header";
    header.textContent = "the brunch place";
    return header;
}

function initNav() {
    const nav = document.createElement("div");
    nav.id = "nav";
    nav.appendChild(helper.createTab("about"));
    nav.appendChild(helper.createTab("menu"));
    nav.appendChild(helper.createTab("contact"));
    return nav;
}

function initContent() {
    const content = document.createElement("div");
    content.id = "content";
    return content;
}

function initFooter() {
    const footer = document.createElement("div");
    footer.id = "footer";

    const copyright = document.createElement("div");
    copyright.textContent = "©2021 adam gordon"

    const github_link = document.createElement("a");
    github_link.onclick = () => {
        window.open("https://github.com/gbreadman/restaurant","_blank");
    };
    const github_icon = document.createElement("i");
    github_icon.classList.add("fab");
    github_icon.classList.add("fa-github");
    github_link.appendChild(github_icon);

    footer.appendChild(copyright);
    footer.appendChild(github_link);
    return footer;
}

function initBackground() {
    const background = document.createElement("div");
    background.id = "background";
    const text = document.createElement("div");
    text.classList.add("background-text");
    let backgroundString = "the brunch place ";
    for (let i = 0; i < 9; i++) {
        backgroundString += backgroundString;
    }
    text.textContent = backgroundString;
    background.appendChild(text);
    return background;
}

function initPage () {
    document.body.appendChild(initBackground());

    const wrapper = document.createElement("div");
    wrapper.id = "wrapper";
    wrapper.appendChild(initHeader());
    wrapper.appendChild(initNav());
    wrapper.appendChild(initContent());
    wrapper.appendChild(initFooter());
    document.body.appendChild(wrapper);
    
    helper.activate(document.getElementById("about"));
}

export default initPage;



