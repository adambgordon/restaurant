import mains from "./menu/mains.csv";

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

function createDishList(string) {
    const gridWrapper = document.createElement("div");
    gridWrapper.classList.add("dish-grid");

    let array;
    if (string === "smalls") {
        // array = smalls;
    } else if (string === "mains") {
        array = mains;
    } else {
        return;
    }

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
    menu.appendChild(createDishSection("mains"));
    menu.appendChild(createDishList("mains"));
    return menu;
}

export default createMenu;