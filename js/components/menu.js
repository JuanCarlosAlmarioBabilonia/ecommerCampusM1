export const menuListCategoryIndex = () => {
    let {data} = res;
    let plantilla = "";
    data.forEach((value, index)=> {
        plantilla += /*html*/`
        <li title="${value.name}">
            <a href="#" >
                <img src="storage/img/category.svg" >
                <span>${value.name}</span>
            </a>
        </li>
    `;
    })
}