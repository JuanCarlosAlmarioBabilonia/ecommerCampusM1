import { AddProduct } from "./components/section.js";

let productAdded = document.querySelector("#productAdded");
let totalItems = document.querySelector("#items");
let totalPrice = document.querySelector("#totalPrice");
let subTotal = document.querySelector("#subtotal");

let sessionStorageValues = Object.values(sessionStorage);
console.log(sessionStorage);
addEventListener("DOMContentLoaded", async (e) => {
    productAdded.innerHTML = await AddProduct(sessionStorageValues);
    productAdded.querySelectorAll(".cuadro img").forEach(button => {
        button.addEventListener("click", updateQuantity);
    });
    calculateTotals();
});


const updateQuantity = (e) => {
    let cart = JSON.parse(sessionStorage.getItem('cart'));
    let button = e.target;
    let productElement = button.closest(".product_detail");
    let spanQuantity = productElement.querySelector("#number2");
    let quantity = Number(spanQuantity.innerHTML);
    let productId = productElement.dataset.productId;

    if (button.id === "increaseButton2") {
        quantity += 1;
    } else if (button.id === "decreaseButton2" && quantity > 1) {
        quantity -= 1;
    }

    spanQuantity.innerHTML = quantity;

    Object.keys(sessionStorage).forEach((key) => {
        const storedValue = sessionStorage.getItem(key);
        if (storedValue) {
          try {
            const data = JSON.parse(storedValue);
            if (data.status === 'OK' && data.request_id && data.data) {
              data.data.quantity = quantity.toString();
              console.log(data);
              
              sessionStorage.setItem(key, JSON.stringify(data));
            }
          } catch (error) {
            console.error(`Error parsing Session Storage value: ${error}`);
          }
        }
      });
    calculateTotals();
};

const calculateTotals = () => {

    Object.keys(sessionStorage).forEach((key) => {
        const storedValue = sessionStorage.getItem(key);
        if (storedValue) {
          console.log(storedValue);
            try {
              const data = JSON.parse(storedValue);
              if (data.status === 'OK' && data.request_id && data.data) {
                let quantity = Number(data.data.quantity);
                let totalItemsCount = 0;
                let totalPriceValue = 0;
                
                console.log(data);
                let o= [data]
                
                o.forEach(product => {
                    totalItemsCount += quantity;
                    console.log(totalItemsCount);
                    
                    totalPriceValue += quantity* Number(product.data.product_price.replace("$", ""));

                    
                    totalItems.innerHTML = totalItemsCount;
                    totalPrice.innerHTML = `$${totalPriceValue.toFixed(2)}`;
                    subTotal.innerHTML = `$${totalPriceValue.toFixed(2)}`;
                });
                console.log(o);
                

                sessionStorage.setItem(key, JSON.stringify(data));
                console.log(sessionStorage);
              }
            } catch (error) {
              console.error(`Error parsing Session Storage value: ${error}`);
            }
          }
        });
    }




