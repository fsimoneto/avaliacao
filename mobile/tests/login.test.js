const LoginPage = require('../pages/LoginPage');

describe('Teste de Login - App Mobile', () => {
  it('Deve realizar login com sucesso', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');

    const inventoryHeader = await $('~test-PRODUCTS');
    await expect(inventoryHeader).toBeDisplayed();
  });
});
