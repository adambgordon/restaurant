import * as helper from "./helper.js";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/brands';
import logo from "./assets/logo.png";
import logo_white from "./assets/logo-white.png";

// create fixed page header
function initHeader() {
    const header = document.createElement("div");
    header.id = "header";
    header.textContent = "the brunch place";
    return header;
}

// create navbar
function initNav() {
    const nav = document.createElement("div");
    nav.id = "nav";

    // utilizing functions from helper.js to build each tab of the nav
    nav.appendChild(helper.createTab("about"));
    nav.appendChild(helper.createTab("menu"));
    nav.appendChild(helper.createTab("contact"));
    return nav;
}

// create content DOM element
function initContent() {
    const content = document.createElement("div");
    content.id = "content";
    return content;
}

// create and build out footer including github icon and live link
function initFooter() {
    const footerWrapper = document.createElement("div");
    footerWrapper.id = "footer-wrapper";

    // links to github page for this repo
    const footer = document.createElement("a");
    footer.id = "footer";
    footer.onclick = () => {
        window.open("https://github.com/adambgordon/restaurant","_blank");
    };
    const copyright = document.createElement("div");
    copyright.textContent = "©2021 adam gordon"

    // using font awesome to load github icon
    const github_icon = document.createElement("i");
    github_icon.classList.add("fab");
    github_icon.classList.add("fa-github");
    
    footer.appendChild(copyright);
    footer.appendChild(github_icon);
    footerWrapper.appendChild(footer);
    return footerWrapper;
}

// creates and build background typography (w/large overflow for all zoom levels)
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

// create logo in upper lefthand corner
function initLogo() {
    const logoWrapper = document.createElement("div");
    logoWrapper.id = "logo-wrapper";

    // logo links to the website in same tab (essentially home/refresh button)
    logoWrapper.onclick = () => {
        window.open("https://adambgordon.github.io/restaurant/","_self");
    };

    // used white on black png files to create logo interactivity
    // (custom svg file load failure)
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

// builds whole page by appending all DOM elements accordingly
// and allows index.js to call one function only
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
