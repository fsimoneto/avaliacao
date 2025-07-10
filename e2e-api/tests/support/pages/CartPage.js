const { expect } = require("@playwright/test")

class CartPage {
  constructor(page) {
    this.page = page
    this.checkoutButton = page.locator('[data-test="checkout"]')
  }

  async proceedToCheckout() {
    await expect(this.checkoutButton).toBeVisible()
    await this.checkoutButton.click()
    await expect(this.page).toHaveURL(/.*checkout-step-one/)
  }
}

module.exports = { CartPage };