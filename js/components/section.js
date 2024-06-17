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

export const productPriceFooter = async ({data: dataUpdate} = res) => {
    return /*html*/`
    <ul class="footer__ul">
        <li>
            <a href="../views/checkout.html">
                <img src="../storage/img/shopping-cart.svg">
                <span>Add to Cart | ${dataUpdate.product_price}</span>
            </a>
        </li>
    </ul>
    `;
}

export const productDescription = async ({data: dataUpdate} = res) => {
    return /*html*/`
    <article class="product__information">
    <p>${dataUpdate.product_description}</p>
    </article>
    `;
}

