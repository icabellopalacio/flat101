Feature: Comprar en Demoblaz
    As Usuario de Demoblaz
    I wan to comprar un producto 
    So voy a seleccionar el producto, 
    añadirlo al carrito y 
    rellenar los datos de compra

    Scenario: Comprar un producto en Demoblaz
        Given Estoy en la página de listado de productos
        When Voy al detalle de un producto
        And Añado el producto al carrito
        And Relleno los datos de compra en la página del carrito
        Then La compra se realiza con éxito