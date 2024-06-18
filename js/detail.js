import { galleryCategory } from "./components/gallery.js";
import { titleProductDetail, productPriceFooter, productDescription } from "./components/section.js";
import { getProductId } from "./module/detail.js";

let main__section__gallery = document.querySelector("#main__section__gallery");
let main__section__title = document.querySelector("#main__section__title");
let product__price = document.querySelector("#product__price");
let product_description = document.querySelector("#product_description");


addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductId({id})));
    main__section__gallery.innerHTML = await galleryCategory(JSON.parse(localStorage.getItem(id)))
    main__section__title.innerHTML = await titleProductDetail(JSON.parse(localStorage.getItem(id)))
    let increase_button = document.querySelector("#increaseButton");
    let decrease_button = document.querySelector("#decreaseButton");
    product__price.innerHTML = await productPriceFooter(JSON.parse(localStorage.getItem(id)))
    product_description.innerHTML = await productDescription(JSON.parse(localStorage.getItem(id)))
    

    decrease_button.addEventListener("click",quantity)
    increase_button.addEventListener("click",quantity)
})

    const quantity = async (e)=>{
        let number = document.querySelector("#number");
        let price_discount = document.querySelector("#price_discount");
        let price_original = document.querySelector("#price_original");
        let params = new URLSearchParams(location.search);
        let id = params.get('id');
        let res = JSON.parse(localStorage.getItem(id)).data;

        let product_original_price = undefined;
        if(res.product_original_price) product_original_price = Number(res.product_original_price.replace("$", ""));
        let product_price= Number(res.product_price.replace("$", ""));

        if(e.target.id == "increaseButton")number.innerHTML = Number(number.innerHTML) + 1
        if(e.target.id == "decreaseButton" && number.innerHTML > "1") number.innerHTML = Number(number.innerHTML) - 1;

    price_discount.innerHTML = `$${(product_price * Number(number.innerHTML)).toFixed(2)}`;
    if(product_original_price) price_original.innerHTML = `$${(product_original_price * Number(number.innerHTML)).toFixed(2)}`;
    // Swal.fire({
    //     position: "top-end",
    //     title: `<small>Product ${id} with a quantity of ${span_quantity.innerHTML} was added to the cart</small>`,
    //     showConfirmButton: false,
    //     timer: 2000
    // });
}

    // let {data} = res;
    // let {
    //     category_path,
    //     about_product,
    //     product_details,
    //     product_information,
    //     product_photos,
    //     product_variations,
    //     rating_distribution,
    //     review_aspects,
    //     ...dataUpdate
    // } = data;
    // console.log(dataUpdate);