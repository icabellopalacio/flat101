📌 Proyecto de prueba técnica para Flat101

📖 Descripción

Este repositorio contiene un conjunto de pruebas automatizadas para la aplicación web DemoBlaze. Las pruebas están escritas en Cucumber con TypeScript y utilizan Playwright para pruebas end-to-end. Además, se incluye una prueba de carga con Artillery.

🚀 Tecnologías Utilizadas

Cucumber.js para escribir pruebas en lenguaje Gherkin.

Playwright para la automatización del navegador.

Artillery para pruebas de carga.

Bitbucket Pipelines para CI/CD.

Node.js 18+.

📂 Estructura del Proyecto
flat101/
│── src/tests/
│   ├── features/        # Archivos .feature con los escenarios en Gherkin
│   ├── step-definitions/ # Implementación de los pasos en TypeScript
│   ├── pages/           # Page Objects para Playwright
│   ├── hooks.ts         # Hooks para Before y After
│── artillery/
│   ├── stress-test.yml  # Configuración de Artillery para pruebas de carga
│── bitbucket-pipelines.yml  # Definición del pipeline CI/CD
│── package.json        # Dependencias del proyecto
│── README.md           # Documentación del proyecto
📋 Instalación y Configuración

1️⃣ Clonar el repositorio
git clone https://github.com/icabellopalacio/flat101.git
cd flat101
2️⃣ Instalar dependencias
npm install 
3️⃣ Ejecutar las pruebas end-to-end
npx cucumber-js
4️⃣ Ejecutar las pruebas de carga
npx artillery run artillery/stress-test.yml
🏗 Pipeline en Bitbucket

Este proyecto utiliza Bitbucket Pipelines para ejecutar pruebas de manera automática.

🛠 Configuración en bitbucket-pipelines.yml

📝 Escenarios de Prueba (Ejemplo en Gherkin)
Feature: Proceso de Compra en DemoBlaze

  Scenario: Usuario completa una compra exitosa
    Given el usuario navega a la página principal
    When el usuario agrega un producto al carrito
    And el usuario procede al checkout
    And completa el formulario de pago
    Then la compra se confirma con un mensaje de éxito
     Solución de Problemas

Error Cannot find module 'cucumber' → Ejecutar npm install nuevamente.

Pruebas fallan por timeout → Asegurar waitForSelector en los selectores importantes.

No se encuentran los reportes en el pipeline → Verificar que los artifacts estén configurados.


