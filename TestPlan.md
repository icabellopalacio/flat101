# Test Plan: Flujo de Compra en Demoblaze

## Objetivo de la prueba
El objetivo de esta prueba es validar que el flujo de compra en la plataforma **Demoblaze** funcione correctamente. Este flujo incluye la selección de productos, añadirlos al carrito, el proceso de pago y la confirmación de la compra. Se espera que el usuario pueda completar una compra correctamente sin errores en el proceso.

## Casos de prueba

### 1. Feature: Selección de producto y visualización de detalles

    Scenario: El usuario selecciona un producto y ve sus detalles
        Given El usuario está en la página principal de productos
        When El usuario selecciona un producto
        Then El usuario debe ser redirigido a la página de detalles del producto
        And El producto debe mostrar la información completa (Nombre, Precio y Descripción)

### 2. Feature: Añadir el producto al carrito

    Scenario: El usuario añade un producto al carrito
        Given El usuario está en la página de detalles de un producto
        When El usuario hace clic en "Add to cart"
        Then El producto debe ser añadido al carrito


### 3. Feature: Visualización del carrito

    Scenario: El usuario accede al carrito y ve los productos añadidos
        Given El usuario tiene productos en el carrito
        When El usuario hace clic en el menú del carrito
        Then El usuario debe ver los productos añadidos
        And Cada producto debe mostrar su nombre y precio


### 4. Feature: Rellenar datos de compra

    Scenario: El usuario completa el formulario de compra
        Given El usuario está en la página del carrito
        When El usuario hace clic en "Place Order"
        And El usuario rellena los campos con datos válidos (nombre, pais, cuidad, tarjeta de crédito, mes y año)
        Then pulsa el botón de Purchase
        And El usuario debe ver un mensaje de confirmación de la compra


### 5. Feature: Cancelación de la compra

    Scenario: El usuario cancela la compra
        Given El usuario ha completado los datos de compra
        When El usuario hace clic en "Place Order"
        And El usuario rellena los campos con datos válidos (nombre, pais, cuidad, tarjeta de crédito, mes y año)
        Then pulsa el botón de Close
        And el panel de los detalles del pago se cierra


## Criterios de aceptación
- El flujo de compra debe ser funcional y sin errores.
- Los productos deben ser añadidos correctamente al carrito y mostrarse correctamente en la página del carrito.
- El proceso de pago debe permitir completar la transacción sin errores y mostrar la página de confirmación.
- Los datos de compra deben ser almacenados correctamente y la compra debe ser procesada.
- El sistema debe mostrar una confirmación de compra clara y precisa.

## Requisitos previos
- Tener acceso a la página web de **Demoblaze**: [https://www.demoblaze.com/]
- El usuario debe estar en la página principal de productos.
- El usuario debe tener productos disponibles en el catálogo.

## Estrategia de ejecución
1. Realizar los casos de prueba en un entorno limpio y estable de la aplicación web.
2. Utilizar un navegador web moderno y actualizado (como Chrome o Firefox) para realizar las pruebas.
3. Verificar que no haya interferencia de cookies o caché que pueda alterar el comportamiento del flujo de compra.
4. Ejecutar cada caso de prueba de forma secuencial, asegurando que los resultados coincidan con los resultados esperados.
5. Documentar cualquier error encontrado y proporcionarlo al equipo de desarrollo para su resolución.
6. Repetir las pruebas si es necesario, especialmente después de realizar cambios en el sistema.

## Herramientas necesarias
- Navegador web (preferiblemente Chrome o Firefox).
  
