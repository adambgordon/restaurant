import * as getContent from "./getcontent.js";

function createTab(tabName) {
    const tab = document.createElement('div');
    tab.classList.add("tab");
    tab.id = tabName;
    tab.textContent = tabName;
    tab.addEventListener("click",load);
    return tab;
}

function load () {
    if (this.classList.contains("active")) return;

    const tabs = document.querySelectorAll(".tab");
    tabs.forEach( (tab) => {
        if (tab.classList.contains("active") && tab !== this) {
            tab.classList.remove("active");
            removeContent();
            
        }
    });
    this.classList.add("active");
    addContent(getContent[this.id]());
}

function addContent(item) {
    document.getElementById("content").appendChild(item);
}

function removeContent() {
    return document.getElementById("content").firstChild.remove();
}

export { createTab };