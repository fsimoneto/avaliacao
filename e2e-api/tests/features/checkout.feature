Feature: Checkout

  Scenario: Fluxo completo de compra
  
    Given que estou logado como "standard_user" com a senha "secret_sauce"
    And adiciono o item "Sauce Labs Backpack" ao carrinho
    And acesso o carrinho e avanço para o checkout
    When preencho o formulário com nome "Felipe", sobrenome "QA" e CEP "12345"
    Then vejo o resumo da compra com item "Sauce Labs Backpack", preço "$29.99" e total "Total: $32.39"
    And finalizo o pedido com sucesso