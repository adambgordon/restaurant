function createTab(tabName) {
    const content = document.querySelector("#content");
    const tab = document.createElement('div');
    tab.id = tabName;
    tab.textContent = tabName;
    content.appendChild(tab);
}

export { createTab };