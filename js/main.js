import { getAllCategory, getAllProductNames } from "./module/app.js";
import { galleryIndex } from "./components/gallery.js";
// let header__information = document.querySelector('.header__information');
// console.log(header__information);

let input__search = document.querySelector("#input__search");
let main__article = document.querySelector(".main__article");
let nav__ul = document.querySelector(".nav__ul");

addEventListener("DOMContentLoaded", async e => {
    let data = await getAllCategory();
    nav__ul.innerHTML = await menuListCategoryIndex(data);
})

input__search.addEventListener("change", async e => {
    let data = {search: e.target.value}
    input__search.value = null;
    let res = await getAllProductNames(data);
    main__article.innerHTML = galleryIndex(res);
});

// mouseover: para cuando se pasa el mouse por el buscador
// change: para registar el evento realizado en el buscador
// e es la abreviacion de event, y este envia lo que se hizo
// para los callbacks no se usa return
// value: para que aparezca lo escrito en el buscador en la consola
// instalar es6-string-html
