export const menuListCategoryIndex = (res)=>{
    let {data} = res;
    let dataArray = Array.from(data);
    let plantilla = "";
    dataArray.forEach((value, index) => {
        plantilla += /*html*/`
        <li title="${value.name}">
            <a href="#" >
                <img src="storage/img/category.svg" >
                <span>${value.name}</span>
            </a>
        </li>
        `;
    });
    return plantilla;
}