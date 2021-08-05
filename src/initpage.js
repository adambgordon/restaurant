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

    const copyright = document.createElement("div");
    copyright.textContent = "©2021 adam gordon"

    // const github_link = document.createElement("a");
    // github_link.href = "https://google.com";

    // const github_icon = document.createElement("img");
    // github_icon.src = "./src/GitHub-Mark/GitHub-Mark-32px.png"

    // github_link.appendChild(github_icon);

    footer.appendChild(copyright);
    // footer.appendChild(github_icon);
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



