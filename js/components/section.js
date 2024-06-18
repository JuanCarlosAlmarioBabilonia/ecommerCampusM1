export const titleProductDetail = async ({data: dataUpdate} = res) => {
    return /*html*/`
    <article class="article__detail">
        <div class="detail__head">
            <h1>${dataUpdate.product_title}</h1>
            <div class="product__select">
                <img src="../storage/img/minus.svg" id ="decreaseButton" >
                <span id="number">1</span>
                <img src="../storage/img/plus.svg" id ="increaseButton" >
            </div>
        </div>
        <div class="detail__score">
        ${new Array (parseInt(dataUpdate.product_star_rating)).fill(`<img src="../storage/img/star.svg"></img>`).join("")}
            <span>${dataUpdate.product_star_rating}</span>
            <a href="${dataUpdate.product_url}">(${dataUpdate.product_num_ratings} reviews)</a>
        </div>
    </article>
`;
}

export const productPriceFooter = async(res)=>{
    let {data} = res;
    let {
        category_path,
        about_product,
        product_details,
        product_information,
        product_photos,
        product_variations,
        rating_distribution,
        review_aspects,
        ...dataUpdate
    } = data;

    let product_original_price = dataUpdate.product_original_price;
    let product_price = dataUpdate.product_price;
    if(product_original_price != null && product_original_price.indexOf("$")) product_original_price = `$${product_original_price}` 
    if(product_price.indexOf("$")) product_price = `$${product_price}` 
    return /*html*/`
    <button class="footer__ul">
        <li>
            <a href="#">
                <img src="../storage/img/shopping-cart.svg">
                <span>Add to Cart | ${(product_original_price) ? "<span id='price_discount'>"+product_price+"</span><del><sub id='price_original'>"+product_original_price+"</sub></del>" : "<span id='price_discount'>"+product_price+"</span> <del><sub id='price_original'></sub></del>"} </span>
            </a>
        </li>
    </button>
    `;
}

export const productDescription = async ({data: dataUpdate} = res) => {
    return /*html*/`
    <article class="product__information">
    <details>
    <summary><strong>Product Description</strong></summary>
    <p>${dataUpdate.product_description}</p>
    </details>
    </article>
    `;
}

