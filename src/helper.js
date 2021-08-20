import * as getContent from "./getcontent.js";

// creates navbar tab based on string
function createTab(tabName) {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.id = tabName;
    tab.textContent = tabName;
    tab.addEventListener("click",load);
    return tab;
}

// loads the the appropriate tab when clickend
function load () {

    // if already active when clicked, return
    if (this.classList.contains("active")) return;

    // otherwise, deactivate the active tab
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach( (tab) => {
        if (tab.classList.contains("active") && tab !== this) {
            tab.classList.remove("active");
            removeContent();
            
        }
    });

    // then active the clicked one
    activate(this);
}

// activates tab
// (dynamically calls getContent.js function based on tab)
function activate(tab) {
    tab.classList.add("active");
    addContent(getContent[tab.id]());
}

// appends content in DOM
function addContent(item) {
    document.getElementById("content").appendChild(item);
}

// removes content from DOM
function removeContent() {
    return document.getElementById("content").firstChild.remove();
}

export { createTab, activate };