## E2E (Cucumber + Playwright)

Os testes E2E foram automatizados com Playwright e Cucumber, cobrindo fluxo de login e checkout.  
Para rodar os testes e gerar o relatório:  
```bash
cd e2e-api && npm run test:all
```
---

## Testes de API (Playwright)

Testes automatizados para APIs REST, utilizando Playwright, cobrindo os métodos POST, GET, PUT e DELETE contra a API pública https://reqres.in.

Para executar os testes de API, rode:  
```bash
cd e2e-api && npm run test:api
cd e2e-api && npx playwright show-report
```
---

## Teste de Carga com K6

Este projeto contém um teste de carga básico utilizando o K6, simulando 500 usuários simultâneos acessando a API pública https://reqres.in.

A API reqres.in é pública e possui limites, podendo ocasionar algumas falhas.

Para executar o teste:  
```bash
cd carga && k6 run tests/load-test.js
```
Gera o arquivo de relatório `summary.html`.

---

## Teste Mobile

Testes mobile automatizados com Appium, cobrindo fluxo de login, navegação, formulário e validações no app SauceLabs.

Para rodar e gerar relatório Allure:  
```bash
cd mobile && npm test                 # Executa os testes mobile  
cd mobile && npm run allure:generate  # Gera relatório HTML  
cd mobile && npm run allure:open      # Abre o relatório no navegador  
```
---

## Relatórios

Após a execução do pipeline, os relatórios são salvos e podem ser baixados na aba **Actions**:
1. Acesse o workflow executado;
2. Role até a seção **Artifacts**;
3. Baixe `relatorios-gerais.zip`.


