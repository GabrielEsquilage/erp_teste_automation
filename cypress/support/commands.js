Cypress.Commands.add('loginERP', (usuario, senha) => {
  // Intercepta o endpoint que será chamado após o login
  cy.intercept('GET', '**/api/v1/usuario-atual/atual').as('getUsuario');

  // Acessa a tela de login
  cy.visit('https://dev.erp.inovacarreira.com.br/login');
  cy.wait(2500);

  // Preenche o formulário de login
  cy.get('input[id="login-input"]').type(usuario);
  cy.get('input[id="password-input"]').type(senha);
  cy.get('button[type="submit"]').click();

  // Espera o retorno do backend e valida
  cy.wait('@getUsuario').then((intercept) => {
    expect(intercept.response.statusCode).to.eq(200);
    expect(intercept.response.body.login).to.eq(usuario);

    // Armazena o login para uso posterior
    Cypress.env('usuarioLogado', intercept.response.body.login);

    Cypress.env('departamentoNome', intercept.response.body.departamento.nome);

  });
});

//função step 4 cadastro plano de pagamento

Cypress.Commands.add('clickAndWaitResponse', (buttonText, alias, validateFn) => {
  cy.contains('button', buttonText).click();

  cy.wait(`@${alias}`).then((interception) => {
    const { statusCode, body } = interception.response;

    expect(statusCode).to.eq(200);

    if (validateFn) {
      validateFn(body); //realiza verificação costumizada, caso precise
    }
  });
});

