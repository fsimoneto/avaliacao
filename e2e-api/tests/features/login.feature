Feature: Login

  Scenario Outline: Tentativas de login
    Given que estou na tela de login
    When faço login com o usuário "<usuario>" e a senha "<senha>"
    Then devo ver o resultado "<mensagem>"

    Examples:
      | usuario        | senha         | mensagem                                                                  |
      | standard_user  | secret_sauce  | INVENTORY                                                                 |
      | standard_user  | abc123        | Epic sadface: Username and password do not match any user in this service |
