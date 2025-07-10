const { expect } = require("@playwright/test")

class CheckoutPage {
    constructor(page) {
        this.page = page
        this.firstName = page.locator('[data-test="firstName"]')
        this.lastName = page.locator('[data-test="lastName"]')
        this.zip = page.locator('[data-test="postalCode"]')
        this.continueBtn = page.locator('[data-test="continue"]')
        this.finishBtn = page.locator('[data-test="finish"]')
        this.successMessage = page.locator('.complete-header')

        // Locators para validação do resumo do pedido
        this.itemName = page.locator('[data-test="inventory-item-name"]')
        this.itemPrice = page.locator('[data-test="inventory-item-price"]')
        this.totalLabel = page.locator('[data-test="total-label"]')
    }

    async fillForm(first, last, zip) {
        await this.firstName.fill(first)
        await this.lastName.fill(last)
        await this.zip.fill(zip)
        await this.continueBtn.click()
    }

    async validateSummary(itemNameExpected, priceExpected, totalExpected) {
        await expect(this.itemName).toHaveText(itemNameExpected)
        await expect(this.itemPrice).toHaveText(priceExpected)
        await expect(this.totalLabel).toHaveText(totalExpected)
    }

    async finishOrder() {
        await this.finishBtn.click()
        await expect(this.successMessage).toHaveText("Thank you for your order!")
    }
}

module.exports = { CheckoutPage };
