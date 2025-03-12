import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "./hooks";

Given('Estoy en la página de listado de productos', async function () {
    await page.goto("https://www.demoblaze.com/");
});

When('Voy al detalle de un producto', () => {
    // Implementa el código para navegar al detalle de un producto
});

When('Añado el producto al carrito', () => {
    // Implementa el código para añadir el producto al carrito
});

When('Relleno los datos de compra en la página del carrito', () => {
    // Implementa el código para rellenar los datos de compra en la página del carrito
});

Then('La compra se realiza con éxito', () => {
    // Implementa el código para verificar que la compra se realizó con éxito
});