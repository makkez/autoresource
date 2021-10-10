document.getElementById('header-burger').onclick = function () {
    let hBurgerElem = document.getElementById('header__burger');
    if (hBurgerElem) { hBurgerElem.classList.toggle('active'); }

    let navElem = document.getElementById('nav');
    if (navElem) { navElem.classList.toggle('active'); }

    let bodyElem = document.getElementById('body');
    if (bodyElem) { bodyElem.classList.toggle('lock'); }
}
//function burgerOnClickHandler(event) { }