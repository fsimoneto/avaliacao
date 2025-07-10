class InventoryPage {
  get addItemBtn() {
    return $('(//android.widget.TextView[@text="ADD TO CART"])[1]')
  }

  get cartIcon() {
    return $('//android.view.ViewGroup[@content-desc="test-Cart"]')
  }

  async addItemToCart() {
    await this.addItemBtn.waitForDisplayed({ timeout: 5000 })
    await this.addItemBtn.click()
  }

  async goToCart() {
    await this.cartIcon.waitForDisplayed({ timeout: 5000 })
    await this.cartIcon.click()
  }
}

module.exports = new InventoryPage()
