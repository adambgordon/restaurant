import smalls from "./menu/smalls.csv";
import mains from "./menu/mains.csv";
import sweets from "./menu/sweets.csv"

function createDishSection (string) {
    const sectionHeader = document.createElement("div");
    const label = document.createElement("div");
    const divider1 = document.createElement("div");
    const divider2 = document.createElement("div");

    sectionHeader.classList.add("section-header");
    label.classList.add("label");
    divider1.classList.add("divider");
    divider2.classList.add("divider");

    label.textContent = string;
    divider1.textContent = ".........................";
    divider2.textContent = ".........................";
    
    sectionHeader.appendChild(divider1);
    sectionHeader.appendChild(label);
    sectionHeader.appendChild(divider2);

    return sectionHeader;
}

function createDishList(array) {
    const gridWrapper = document.createElement("div");
    gridWrapper.classList.add("dish-grid");

    for (let i = 0; i < array.length; i++) {
        const dish = document.createElement("div");
        const name = document.createElement("div");
        const description = document.createElement("div");
        
        dish.classList.add("dish");
        name.classList.add("dish-name");
        description.classList.add("dish-description");

        name.textContent = array[i][0];
        description.textContent = array[i][1];
        
        dish.appendChild(name);
        dish.appendChild(description);
        gridWrapper.appendChild(dish);
    }
    return gridWrapper;
}

function createMenu() {
    const menu = document.createElement("div");
    menu.appendChild(createDishSection("smalls"));
    menu.appendChild(createDishList(smalls));
    menu.appendChild(createDishSection("mains"));
    menu.appendChild(createDishList(mains));
    menu.appendChild(createDishSection("sweets"));
    menu.appendChild(createDishList(sweets));
    return menu;
}

export default createMenu;