import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";

let browser: Browser;
let page: Page;

Before(async () => {
    console.log("🔄 Iniciando navegador antes del test...");
    browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
  });
  
  After(async () => {
    if (browser.isConnected()){
      console.log("🛑 Cerrando navegador después del test...");
      await browser.close();
    }
  });
  
  export { page };
