import { AddProduct } from "./components/section.js";

document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    let productAdded = document.querySelector("#productAdded");

    if (cart.length > 0) {
        let productHtml = cart.map(product => AddProduct(product));
        productAdded.innerHTML = productHtml.join('');
    } else {
        productAdded.innerHTML = "No hay productos en el carrito.";
    }

    console.log(cart)
});

