import { AddProduct } from "./components/section.js";

let productAdded = document.querySelector("#productAdded");

addEventListener("DOMContentLoaded", async (e) => {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    let productHtml = await Promise.all(cart.map(product => AddProduct(product)));
    productAdded.innerHTML = productHtml.join('');
});

// main.js

// main.js

document.addEventListener("DOMContentLoaded", () => {
    const counter = document.querySelector("#counter");

    // Función para obtener los datos del carrito desde sessionStorage
    function getCartFromSessionStorage() {
        return JSON.parse(sessionStorage.getItem('cart')) || [];
    }

    // Función para actualizar el contador de productos
    function updateProductCount() {
        const cart = getCartFromSessionStorage();
        let totalCount = 0;

        // Sumar la cantidad de cada producto en el carrito
        cart.forEach(product => {
            totalCount += product.quantity;
        });

        // Actualizar el contador en el DOM
        counter.textContent = totalCount.toString();
    }

    // Llamar a la función para actualizar el contador al cargar la página
    updateProductCount();
});







