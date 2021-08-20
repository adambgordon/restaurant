import txt from "./assets/about.txt";

// creates and adds text for the "about" tab
// (data is sourced from txt file)
function createAbout() {
    const item = document.createElement("div");
    item.classList.add("about");
    item.textContent = txt;
    return item;
}

export default createAbout;