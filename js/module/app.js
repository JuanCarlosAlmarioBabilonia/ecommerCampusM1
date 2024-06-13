import {headers} from "../components/env.js"

export const getAllProductNames = async({search:text} = {search:"Phone"}) => {
console.log("Cargando...")
const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${text}Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL`;
const options = {
	method: 'GET',
    headers
};
let res = await fetch(url, options);
let data = await res.json();
return data;
}

export const getAllCategory = async() =>{
console.log("Cargando...")
const url = `https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=2478868012&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL`;
const options = {
	method: 'GET',
	headers
};
let res = await fetch(url, options);
let data = await res.json();
return data;
}