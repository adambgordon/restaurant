import * as helper from "./helper.js"

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
    const copyright = document.createElement("dive");
    copyright.textContent = "©2021 adam gordon"
    footer.appendChild(copyright);
    return footer;
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
    return background;
}

function initPage () {
    const wrapper = document.createElement("div");
    wrapper.id = "wrapper";
    wrapper.appendChild(initHeader());
    wrapper.appendChild(initNav());
    wrapper.appendChild(initContent());
    wrapper.appendChild(initFooter());
    wrapper.appendChild(initBackground());
    document.body.appendChild(wrapper);
    helper.activate(document.getElementById("about"));
}

export default initPage;



