import {AddProduct} from "./components/section.js";

let productAdded = document.querySelector("#productAdded");

addEventListener("DOMContentLoaded", async(e) => {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    let product = await Promise.all(cart.map(product => AddProduct(product)));
    productAdded.innerHTML = product.join('');
});

