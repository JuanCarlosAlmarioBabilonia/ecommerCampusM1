import { getAllCategory, getAllProductNames } from "./module/app.js";
import { galleryIndex } from "./components/gallery.js";
import { menuListCategoryIndex } from "./components/menu.js";
// let header__information = document.querySelector('.header__information');
// console.log(header__information);

let input__search = document.querySelector("#input__search");
let main__article = document.querySelector(".main__article");
let nav__ul = document.querySelector(".nav__ul");

addEventListener("DOMContentLoaded", async e => {
    if(!localStorage.getItem("getAllCategory")) localStorage.setItem("getAllCategory", JSON.stringify(await getAllCategory()));
    nav__ul.innerHTML = await menuListCategoryIndex(JSON.parse(localStorage.getItem("getAllCategory")));
})

input__search.addEventListener("change", async e => {
    let params = new URLSearchParams(location.search);
    let data = {search: e.target.value, id: params.get("id")}
    input__search.value = null;
    let res = await getAllProductNames(data);
    main__article.innerHTML = await galleryIndex(res, params.get("id"));
});

// mouseover: para cuando se pasa el mouse por el buscador
// change: para registar el evento realizado en el buscador
// e es la abreviacion de event, y este envia lo que se hizo
// para los callbacks no se usa return
// value: para que aparezca lo escrito en el buscador en la consola
// instalar es6-string-html
