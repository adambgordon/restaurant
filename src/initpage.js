import * as helper from "./helper.js";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/brands';
import logo from "./assets/logo.png";
import logo_white from "./assets/logo-white.png";

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
        window.open("https://github.com/adambgordon/restaurant","_blank");
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
        window.open("https://adambgordon.github.io/restaurant/","_self");
    };
    const logoImage = new Image();
    logoImage.src = logo;
    logoImage.id = "logo";
    const logoFilter = new Image();
    logoFilter.src = logo_white;
    logoFilter.id = "logo-filter";
    logoWrapper.appendChild(logoImage);
    logoWrapper.appendChild(logoFilter);
    return logoWrapper;
}

function initPage () {
    document.body.appendChild(initBackground());
    document.body.appendChild(initLogo());
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
