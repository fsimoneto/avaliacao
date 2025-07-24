const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')

Given('que estou na tela de login', async function () {
  await this.login.visit()
})

When('faço login com o usuário {string} e a senha {string}', async function (username, password) {
  await this.login.submit(username, password)
})

Then('devo ver o resultado {string}', async function (mensagem) {
  if (mensagem === 'INVENTORY') {
    await this.login.isLoggedIn()
  } else {
    await this.login.isLoginErrorVisible(mensagem)
  }
})