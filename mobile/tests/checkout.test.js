const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

describe('Fluxo para adicionar produto ao carrinho preenchendo dados', () => {
  it('Deve fazer login e adicionar um item ao carrinho', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');

    await InventoryPage.addItemToCart();
    await InventoryPage.goToCart();

    await CartPage.proceedToCheckout();

    await CheckoutPage.fillForm('Felipe', 'QA', '85803441');
    await CheckoutPage.validateOrder(
      'CHECKOUT: OVERVIEW',
      'Item total: $29.99',
      'Total: $32.39'
    );
  });
});