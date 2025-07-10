Feature: Login

  Scenario: Login com sucesso
    Given que estou na tela de login
    When faço login com o usuário "standard_user" e a senha "secret_sauce"
    Then devo ver a página de inventário

  Scenario: Login com senha incorreta
    Given que estou na tela de login
    When faço login com o usuário "standard_user" e a senha "abc123"
    Then devo ver a mensagem de erro "Epic sadface: Username and password do not match any user in this service"