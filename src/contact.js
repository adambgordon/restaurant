import json from "./assets/contact.json";

// creates and build contact info for "contact" tab
// data is sourced from "2D" json file
function createContact() {
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact");
    for (let key in json) {
        const grouping = document.createElement("div");
        for (let subkey in json[key]) {
            const line = document.createElement("div");
            line.textContent = json[key][subkey];
            grouping.appendChild(line);
        }
        contactInfo.appendChild(grouping);
    }
    return contactInfo;
}

export default createContact;