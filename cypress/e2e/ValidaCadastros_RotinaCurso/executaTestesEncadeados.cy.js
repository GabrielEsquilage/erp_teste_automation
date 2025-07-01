// executaTestesEncadeados.cy.js

describe('Execução Encadeada dos Testes de Cadastro', () => {
  require('./ValidaCadastroPlanoPagamento.cy.js');
  require('./validaCadastroCursos.cy.js');
  require('./validaCadastroDisciplina.cy.js');
  require('./validaCadastroCurriculo.cy.js');

  // Quando estiver pronto, descomente e adicione o teste abaixo:
   require('./ValidaCadastroProcessoSeletivo.cy.js');
});
