import './style.css';
import './hero.jpg';
import './chef.jpg';
import {init,showHomeContent} from './home.js';
import showMenuContent from './menu.js';

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
    }
}
headerEl.addEventListener('click',onClick);