require('dotenv').config();

const { setWorldConstructor, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

const { LoginPage } = require('./pages/LoginPage');
const { InventoryPage } = require('./pages/InventoryPage');
const { CartPage } = require('./pages/CartPage');
const { CheckoutPage } = require('./pages/CheckoutPage');

class CustomWorld {
  async launchBrowser() {
    this.browser = await chromium.launch({ headless: true });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    // Injeta os Page Objects no contexto do teste
    this.login = new LoginPage(this.page);
    this.inventory = new InventoryPage(this.page);
    this.cart = new CartPage(this.page);
    this.checkout = new CheckoutPage(this.page);
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

// Torna a classe CustomWorld disponível para os testes
setWorldConstructor(CustomWorld);

// Hooks globais
Before(async function () {
  await this.launchBrowser();
});

After(async function () {
  await this.closeBrowser();
});
