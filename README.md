# 📌 Proyecto de Prueba Técnica para Flat101

## 📖 Descripción

Este repositorio contiene un conjunto de pruebas automatizadas para la prueba técnica de Flat101, utilizando herramientas modernas de testing y CI/CD.

## 🚀 Tecnologías Utilizadas

- **Cucumber.js**: Escribimos pruebas en lenguaje Gherkin para asegurar una fácil comprensión de los escenarios.
- **Playwright**: Automatización de navegadores para pruebas end-to-end.
- **Artillery**: Herramienta para realizar pruebas de carga.
- **Bitbucket Pipelines**: Integración y despliegue continuo (CI/CD).
- **Node.js 18+**: Entorno de ejecución de JavaScript.

## 📂 Estructura del Proyecto

```plaintext
flat101/
│── src/tests/
│   ├── features/              # Archivos .feature con los escenarios en Gherkin
│   ├── step-def/              # Implementación de los pasos en TypeScript
│   ├── pages/                 # Page Objects para Playwright usando el patrón Page Object Model
│   ├── hooks.ts               # Hooks para Before y After
│── stress-test.yml             # Configuración de Artillery para pruebas de carga
│── bitbucket-pipelines.yml    # Definición del pipeline CI/CD
│── package.json               # Dependencias del proyecto
│── README.md                  # Documentación del proyecto

##📋 Instalación y Configuración

##1️⃣ Clonar el Repositorio
bash
Copiar
Editar
git clone https://github.com/icabellopalacio/flat101.git
cd flat101


##2️⃣ Instalar Dependencias
bash
Copiar
Editar
npm install
npm install playwright                             # Instalar Playwright y sus dependencias
npx playwright install                             # Instalar los navegadores necesarios
npx playwright install-deps  
npm install --save-dev @cucumber/cucumber          # Instalar Cucumber si no está globalmente disponible
npm install -g artillery                           # Instalar Artillery

##3️⃣ Ejecutar las Pruebas End-to-End
bash
Copiar
Editar
npx cucumber-js ./src/tests/features/**/*.feature --format json:./report/generate_cucumber.js

##4️⃣ Ejecutar las Pruebas de Carga
bash
Copiar
Editar
artillery run ./src/tests/stress-test.yml --output reports/artillery/report.json

##🏗 Pipeline en Bitbucket
Este proyecto utiliza Bitbucket Pipelines para ejecutar las pruebas de manera automática en cada cambio.

##🛠 Configuración en bitbucket-pipelines.yml
Configura tu pipeline para ejecutar las pruebas de manera automática en cada commit o push al repositorio.

##📝 Escenarios de Prueba (Ejemplo en Gherkin)
Feature: Proceso de Compra en DemoBlaze
gherkin
Copiar
Editar
Scenario: Usuario completa una compra exitosa
  Given el usuario navega a la página principal
  When el usuario agrega un producto al carrito
  And el usuario procede al checkout
  And completa el formulario de pago
  Then la compra se confirma con un mensaje de éxito






