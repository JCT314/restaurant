import classicBurgerImg from "./img/burgers/classic_burger.jpg";
import baconBurgerImg from "./img/burgers/bacon_burger.jpg";
import chipotleBurgerImg from "./img/burgers/chipotle_burger.jpg";
import eggsBenedictImg from "./img/burgers/eggs_benedict_burger.jpg";
import stackedBurgerImg from "./img/burgers/stacked_burger.jpg";

function addMenuItem(title,imageSrc,desc) {
    return `
    <div class="menu-item">
        <h2 class="menu-item-title">${title}</h2>
        <div class="menu-img-container">
            <img src=${imageSrc} alt="${title.toLowerCase()}" class="menu-img">
        </div>
        <p class="menu-item-text">${desc}</p>
    </div>
    `;
}

function showMenuContent(mainEl) {
    mainEl.innerHTML = `
    <h2 class="menu-title">Our Options</h2>
    <div class="menu">
        ${addMenuItem("Classic Burger", classicBurgerImg,"Lettuce, Tomato,Lettuce,Onion")}
        ${addMenuItem("Bacon Burger", baconBurgerImg,"Bacon,Cheese,Lettuce, Tomato,Lettuce,Onion")}
        ${addMenuItem("Chipotle Burger", chipotleBurgerImg,"Chipotle, Tomato,Lettuce,Onion")}
        ${addMenuItem("Eggs Benedict Burger", eggsBenedictImg,"Eggs,Tomato,Lettuce,Onion")}
        ${addMenuItem("Stacked Burger", stackedBurgerImg,"3 patties, Lettuce, Tomato,Lettuce,Onion")}
    </div>
    `;
}

export default showMenuContent;