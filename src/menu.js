import Menu from "./assets/menu.json";

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

function createDishList(jsonArray) {
    const gridWrapper = document.createElement("div");
    gridWrapper.classList.add("dish-grid");

    for (let item in jsonArray) {
        const dish = document.createElement("div");
        const name = document.createElement("div");
        const description = document.createElement("div");
        
        dish.classList.add("dish");
        name.classList.add("dish-name");
        description.classList.add("dish-description");

        name.textContent = jsonArray[item].name;
        description.textContent = jsonArray[item].description;
        
        dish.appendChild(name);
        dish.appendChild(description);
        gridWrapper.appendChild(dish);
    }
    return gridWrapper;
}

function createMenu() {
    const menu = document.createElement("div");
    
    for (let section in Menu) {
        menu.appendChild(createDishSection(Menu[section].name));
        menu.appendChild(createDishList(Menu[section].dishes));
    }
    return menu;
}

export default createMenu;