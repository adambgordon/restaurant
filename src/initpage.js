import * as helper from "./helper.js";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import logo from "./logo.png";

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
    const footerWrapper = document.createElement("div");
    footerWrapper.id = "footer-wrapper";

    const footer = document.createElement("a");
    footer.id = "footer";
    footer.onclick = () => {
        window.open("https://github.com/gbreadman/restaurant","_blank");
    };

    const copyright = document.createElement("div");
    copyright.textContent = "©2021 adam gordon"

    const github_icon = document.createElement("i");
    github_icon.classList.add("fab");
    github_icon.classList.add("fa-github");
    
    footer.appendChild(copyright);
    footer.appendChild(github_icon);
    footerWrapper.appendChild(footer);
    return footerWrapper;
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

function initLogo() {
    const logoWrapper = document.createElement("div");
    logoWrapper.id = "logo-wrapper";
    logoWrapper.onclick = () => {
        window.open("https://github.com/gbreadman/restaurant","_blank");
    };
    const logoImage = new Image();
    logoImage.src = logo;
    logoImage.id = "logo";

    logoWrapper.appendChild(logoImage);
    return logoWrapper;
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
    
    document.body.appendChild(initLogo());

    helper.activate(document.getElementById("about"));
}

export default initPage;



