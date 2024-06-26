import { galleryCategory } from "./components/gallery.js";
import { titleProductDetail, productPriceFooter, productDescription } from "./components/section.js";
import { getProductId } from "./module/detail.js";


let datos = {};

let main__section__gallery = document.querySelector("#main__section__gallery");
let main__section__title = document.querySelector("#main__section__title");
let footer__ul = document.querySelector(".footer__ul");
let product_description = document.querySelector("#product_description");


addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductId({id})));
    let info = JSON.parse(localStorage.getItem(id))
    main__section__gallery.innerHTML = await galleryCategory(info);
    main__section__title.innerHTML = await titleProductDetail(info);

    datos.productos = info;
    

    let increase_button = document.querySelector("#increaseButton");
    let decrease_button = document.querySelector("#decreaseButton");
    footer__ul.innerHTML = await productPriceFooter(info)
    product_description.innerHTML = await productDescription(info)
    

    decrease_button.addEventListener("click",quantity)
    increase_button.addEventListener("click",quantity)

    footer__ul.addEventListener("click", async (e) => {
        let id = params.get('id');
        let productInfo = datos.productos;
        let span_quantity = document.querySelector("#number");
        let quantity = Number(span_quantity.innerHTML);

        // Añade la cantidad seleccionada al objeto productInfo
        productInfo.productos.data.quantity = quantity;

        // Obtiene los productos actuales del carrito
        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

        // Añade o actualiza el producto en el carrito
        let existingProductIndex = cart.findIndex(product => product.data.id === productInfo.data.id);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += quantity; // Actualiza el producto existente
        } else {
            cart.push(...productInfo, quantity); // Añade el nuevo producto
        }

        // Guarda el carrito actualizado en sessionStorage
        sessionStorage.setItem(id, JSON.stringify(datos.productos));

        await updateCartDisplay();
})
});


    const quantity = async (e)=>{
        let number = document.querySelector("#number");
        let price_discount = document.querySelector("#price_discount");
        let price_original = document.querySelector("#price_original");
        let params = new URLSearchParams(location.search);
        let id = params.get('id');
        let res = JSON.parse(localStorage.getItem(id)).data;

        if(res.product_original_price) product_original_price = Number(res.product_original_price.replace("$", ""));
        let product_price= Number(res.product_price.replace("$", ""));

        if(e.target.id == "increaseButton")number.innerHTML = Number(number.innerHTML) + 1
        if(e.target.id == "decreaseButton" && number.innerHTML > "1") number.innerHTML = Number(number.innerHTML) - 1;

    price_discount.innerHTML = `$${(product_price * Number(number.innerHTML)).toFixed(2)}`;
    if(product_original_price) price_original.innerHTML = `$${(product_original_price * Number(number.innerHTML)).toFixed(2)}`;
}
    document.addEventListener('click', function(e) {
        if (e.target.id === 'increaseButton2' || e.target.id === 'decreaseButton2') {
            updateCheckoutQuantity(e);
        }
    });

    const updateCheckoutQuantity = (e) => {
        let span_quantity_checkout = document.querySelector("#number2");
        if (e.target.id === 'increaseButton') span_quantity.innerHTML = Number(span_quantity.innerHTML) + 1;
        if (e.target.id === 'decreaseButton' && Number(span_quantity.innerHTML) > 1) span_quantity.innerHTML = Number(span_quantity.innerHTML) - 1;
    };





