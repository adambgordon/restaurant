import mains from "./menu/mains.csv";

function createMenu() {
    const item = document.createElement("div");
    item.textContent = "food item food item food item"
    console.log(mains[0][1]);
    console.log(mains[1]);
    // dynamically make css grid for each section of the menu
    return item;
}

export default createMenu;