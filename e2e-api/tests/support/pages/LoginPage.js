const { expect } = require("@playwright/test")

class LoginPage {
    constructor(page) {
        this.page = page
        this.loginButton = page.locator('#login-button')
    }

    async do(username, password) {
        await this.visit()
        await this.submit(username, password)
        await this.isLoggedIn()
    }

    async visit() {
        await this.page.goto(process.env.BASE_URL)
        await expect(this.loginButton).toBeVisible()
    }

    async submit(username, password) {
        await this.page.fill('#user-name', username)
        await this.page.fill('#password', password)
        await this.loginButton.click()
    }

    async isLoggedIn() {
        // Após login bem-sucedido, valida se foi redirecionado para a página de inventário
        await expect(this.page).toHaveURL(/.*inventory/)
    }

    async isLoginErrorVisible(text) {
        const alert = this.page.locator('[data-test="error"]')
        await expect(alert).toHaveText(text)
    }
}

module.exports = { LoginPage };
