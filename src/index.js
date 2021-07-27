import _ from 'lodash';
import './style.css';

console.log("This worked!");

function component() {
    const element = document.createElement('div');
    element.textContent = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('content');
    return element;
}

document.body.appendChild(component());
