📌 Proyecto de prueba técnica para Flat101

📖 Descripción

Este repositorio contiene un conjunto de pruebas automatizadas que aparecen en la prueba tácnica de Flat101

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
│   ├── step-def/        # Implementación de los pasos en TypeScript
│   ├── pages/           # Page Objects para Playwright usando el patrón Page Object Model 
│   ├── hooks.ts         # Hooks para Before y After
│── stress-test.yml     # Configuración de Artillery para pruebas de carga
│── bitbucket-pipelines.yml  # Definición del pipeline CI/CD
│── package.json        # Dependencias del proyecto
│── README.md           # Documentación del proyecto
📋 Instalación y Configuración

1️⃣ Clonar el repositorio
git clone https://github.com/icabellopalacio/flat101.git
cd flat101
2️⃣ Instalar dependencias
npm install 
npm install playwright                             # Instalar Playwright y sus dependencias
npx playwright install                             # Instalar los navegadores necesarios
npx playwright install-deps  
npm install --save-dev @cucumber/cucumber # Instalar Cucumber si no está globalmente disponible
npm install -g artillery  
   
3️⃣ Ejecutar las pruebas end-to-end
npx cucumber-js ./src/tests/features/**/*.feature --format json:./report/generate_cucumber.js

4️⃣ Ejecutar las pruebas de carga
artillery run ./src/tests/stress-test.yml --output reports/artillery/report.json
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
 

