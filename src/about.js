import txt from "./about.txt";

function createAbout() {
    const item = document.createElement("div");
    item.classList.add("about");
    item.textContent = txt;
    return item;
}

export default createAbout;