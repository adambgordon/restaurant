import * as loadContent from "./loadcontent";

function createTab(tabName) {
    const tab = document.createElement('div');
    tab.classList.add("tab");
    tab.id = tabName;
    tab.textContent = tabName;
    tab.addEventListener("click",load);
    return tab;
}

function load () {
    loadContent[this.id]();
}

export { createTab };