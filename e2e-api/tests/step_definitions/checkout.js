const { Given, When, Then } = require('@cucumber/cucumber');

Given('que estou logado como {string} com a senha {string}', async function (username, password) {
  await this.login.do(username, password);
});

Given('adiciono o item {string} ao carrinho', async function (itemName) {
  await this.inventory.addItemToCart();
  await this.inventory.assertCartCount(1);
});

Given('acesso o carrinho e avanço para o checkout', async function () {
  await this.inventory.goToCart();
  await this.cart.proceedToCheckout();
});

When(
  'preencho o formulário com nome {string}, sobrenome {string} e CEP {string}',
  async function (first, last, zip) {
    await this.checkout.fillForm(first, last, zip);
  }
);

Then(
  'vejo o resumo da compra com item {string}, preço {string} e total {string}',
  async function (itemName, itemPrice, total) {
    await this.checkout.validateSummary(itemName, itemPrice, total);
  }
);

Then('finalizo o pedido com sucesso', async function () {
  await this.checkout.finishOrder();
});