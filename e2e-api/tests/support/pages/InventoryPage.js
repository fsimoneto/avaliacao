const { expect } = require("@playwright/test")

class InventoryPage {
    constructor(page) {
        this.page = page
        this.addBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.cartIcon = page.locator('.shopping_cart_link')
        this.cartBadge = page.locator('.shopping_cart_badge')
    }

    async addItemToCart() {
        await expect(this.addBackpackButton).toBeVisible()
        await this.addBackpackButton.click()
    }

    async assertCartCount(expectedCount) {
        await expect(this.cartBadge).toBeVisible()
        await expect(this.cartBadge).toHaveText(expectedCount.toString())
    }

    async goToCart() {
        await this.cartIcon.click()
        await expect(this.page).toHaveURL(/.*cart/)
    }
}

module.exports = { InventoryPage };
