import './style.css';
import './img/general/hero.jpg';
import {init,showHomeContent} from './home.js';
import showMenuContent from './menu.js';
import showContactContent from './contact.js';

const {headerEl,mainEl,footerEl} = init();
const tabs = [...headerEl.querySelectorAll('.nav-item')];
function onClick(e) {
    const tab = e.target.closest('.nav-item');
    if(tab) {
        tabs.forEach(tab => {
            tab.classList.remove('selected');
        });
        tab.classList.add('selected');
        if(tab.textContent === "Menu") {
            showMenuContent(mainEl);
        }
        if(tab.textContent === "Home") {
            showHomeContent(mainEl);
        }
        if(tab.textContent === "Contact") {
            showContactContent(mainEl);
        }
    }
}
headerEl.addEventListener('click',onClick);