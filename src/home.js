import chefImg from "./img/general/chef.jpg";

function init() {
    const contentEl = document.querySelector("#content");
    const headerEl = createHeaderEl();
    const mainEl = createMainEl();
    const footerEl = createFooterEl();
    contentEl.append(headerEl);
    contentEl.append(mainEl);
    contentEl.append(footerEl);
    return {
        headerEl,
        mainEl,
        footerEl
    };
}

function showHomeContent(mainEl) {
    mainEl.innerHTML = 
    `<h2 class="sub-header">Best burgers in your city since 1993</h2>
    <div class="img-container">
        <img src="${chefImg}" alt="chef making burger" class="main-img">
    </div>
    <p class="cta">Order online or visit us!</p>`;
}

function createHeaderEl() {
    const header = document.createElement('header');
    header.classList.add("header");
    header.innerHTML = 
    `<h1 class="headline">Yum Yum Burgers</h1>
    <ul class="nav">
        <li class="nav-item">Home</li>
        <li class="nav-item">Menu</li>
        <li class="nav-item">Contact</li>
    </ul>`;
    return header;
}

function createMainEl() {
    const main = document.createElement('main');
    main.classList.add("main");
    main.innerHTML = 
    `<h2 class="sub-header">Best burgers in your city since 1993</h2>
    <div class="img-container">
        <img src="${chefImg}" alt="chef making burger" class="main-img">
    </div>
    <p class="cta">Order online or visit us!</p>`;
    return main;
}

function createFooterEl() {
    const footer = document.createElement('footer');
    footer.classList.add("footer");
    footer.innerHTML = 
    `<p class="copyright">Copyright &copy; 2022 jct314</p>`;
    return footer
}

export {init,showHomeContent};