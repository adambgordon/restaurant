import Menu from "./assets/menu.json";

// create section (divier w/name) for menu based on string
// (this function is primarily creating & appending DOM elements)
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

// create and build each dish (w/name & description)
// (data is sourced from multi-level json file)
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

// central menu creation function that loops through json file
// to create each section and then its respective dishes accordingly
function createMenu() {
    const menu = document.createElement("div");
    for (let section in Menu) {
        menu.appendChild(createDishSection(Menu[section].name));
        menu.appendChild(createDishList(Menu[section].dishes));
    }
    return menu;
}

export default createMenu;