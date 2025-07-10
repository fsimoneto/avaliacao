class CartPage {
  get checkoutButton() {
    return $('//android.widget.TextView[@text="CHECKOUT"]')
  }

  async proceedToCheckout() {
    await this.checkoutButton.waitForDisplayed({ timeout: 5000 })
    await this.checkoutButton.click()
  }
}

module.exports = new CartPage()
