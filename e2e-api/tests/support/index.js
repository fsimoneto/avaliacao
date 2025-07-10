const { test: base, expect } = require('@playwright/test')

const { LoginPage } = require('./pages/LoginPage')
const { InventoryPage } = require('./pages/InventoryPage')
const { CartPage } = require('./pages/CartPage')
const { CheckoutPage } = require('./pages/CheckoutPage')

const test = base.extend({
  page: async ({ page }, use) => {

    page.login = new LoginPage(page)
    page.inventory = new InventoryPage(page)
    page.cart = new CartPage(page)
    page.checkout = new CheckoutPage(page)

    await use(page)
  }
});

module.exports = { test, expect };
