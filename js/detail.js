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
    product__price.innerHTML = await productPriceFooter(JSON.parse(localStorage.getItem(id)))
    product_description.innerHTML = await productDescription(JSON.parse(localStorage.getItem(id)))
    
    let increase_button = document.querySelector("#increaseButton");
    let decrease_button = document.querySelector("#decreaseButton");
    let number = document.querySelector("#number")

    decrease_button.addEventListener("click", async e => {
        let cantidad = parseInt(number.textContent);
        if (cantidad>1) {
            number.textContent = cantidad - 1
        }
    });

    increase_button.addEventListener("click", async e => {
        let cantidad = parseInt(number.textContent);
            number.textContent = cantidad + 1
    }); 




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
})