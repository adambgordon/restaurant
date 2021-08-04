import json from "./contact.json";

function createContact() {
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact");
    for (let key in json) {
        const line = document.createElement("div");
        line.textContent = json[key];
        contactInfo.appendChild(line);
    }
    return contactInfo;
}

export default createContact;