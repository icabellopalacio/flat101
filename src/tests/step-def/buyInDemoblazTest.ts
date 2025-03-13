import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "./hooks";
import { ProductListPage } from "../pages/ProductListPage";  
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { CartPage } from "../pages/CartPage";
import { expect } from "@playwright/test";

const mainPage = "https://www.demoblaze.com/";

let productListPage: ProductListPage;
let productDetailPage: ProductDetailPage;
let cartPage: CartPage;

Given('Estoy en la página de listado de productos', async () => {
    productListPage = new ProductListPage(page); 
    await page.goto(mainPage);
});

When('Voy al detalle de un producto', async () => {
    await productListPage.selectFirstProduct();
});

When('Añado el producto al carrito, abro el carrito y el panel de datos de pedido', async function(){
    productDetailPage = new ProductDetailPage(page);
    cartPage = new CartPage(page);
    await productDetailPage.addProductToCart();
    await cartPage.openCart()
    await cartPage.placeOrder();
});

When('Relleno los datos de compra en la página del carrito {string}, {string}, {string}, {string}, {string}, {string}', 
    async function(name: string, country: string, city: string, card: string, month: string, year: string) {
        await cartPage.fillPurchaseData(name, country, city, card, month, year);
        await cartPage.completePurchase();
});

Then('La compra se realiza con éxito', async function () {
    const isSuccessful = await cartPage.isPurchaseSuccessful();
    expect(isSuccessful).toBeTruthy();
});