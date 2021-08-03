import _ from 'lodash';
import './style.css';
import menu from './menu.js'
import * as helper from './helper.js'

console.log("This worked!");

function component() {
    const element = document.createElement('div');
    // element.textContent = _.join(['Hello', 'webpack'], ' ');
    element.id = "content";
    return element;
}

document.body.appendChild(component());

helper.createTab("menu");

// menu();