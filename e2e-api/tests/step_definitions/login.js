const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que estou na tela de login', async function () {
  await this.login.visit();
});

When('faço login com o usuário {string} e a senha {string}', async function (username, password) {
  await this.login.submit(username, password);
});

Then('devo ver a página de inventário', async function () {
  await this.login.isLoggedIn();
});

Then('devo ver a mensagem de erro {string}', async function (mensagem) {
  await this.login.isLoginErrorVisible(mensagem);
});