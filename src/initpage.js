import * as helper from './helper.js'

function initpage () {
    const nav = document.createElement('div');
    nav.id = "nav";

    nav.appendChild(helper.createTab("about"));
    nav.appendChild(helper.createTab("menu"));
    nav.appendChild(helper.createTab("contact"));

    const content = document.createElement('div');
    content.id = "content";

    document.body.appendChild(nav);
    document.body.appendChild(content);
}

export default initpage;



