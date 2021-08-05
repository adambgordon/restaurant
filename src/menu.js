import mains from "./menu/mains.csv";

function createMenu() {
    const menu = document.createElement("div");
    const smallsHeader = document.createElement("div");
    const smallsWrapper = document.createElement("div");
    const mainsHeader = document.createElement("div");
    const mainsWrapper = document.createElement("div");

    menu.classList.add("menu");
    smallsHeader.id = "smalls";
    smallsWrapper.classList.add("smalls");
    mainsHeader.id = "mains";
    mainsWrapper.classList.add("mains");

    smallsHeader.textContent = "smalls";
    mainsHeader.textContent = "mains";

    for (let i = 0; i < mains.length; i++) {
        const dish = document.createElement("div");
        const name = document.createElement("div");
        const description = document.createElement("div");
        
        dish.classList.add("dish");
        name.classList.add("dish-name");
        description.classList.add("dish-description");

        name.textContent = mains[i][0];
        description.textContent = mains[i][1];
        
        dish.appendChild(name);
        dish.appendChild(description);

        mainsWrapper.appendChild(dish);
    }

    smallsHeader.appendChild(smallsWrapper);
    mainsHeader.appendChild(mainsWrapper);
    menu.appendChild(smallsHeader);
    menu.appendChild(mainsHeader);
    return menu;
}

export default createMenu;