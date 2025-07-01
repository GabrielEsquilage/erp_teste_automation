describe('Valida Cadastro de Pessoa', () => {
  before(() => {
    cy.loginERP('admin', '7Y/6p0p\\iYd{');
  });

  it('valida o login armazenado', () => {
    const usuario = Cypress.env('usuarioLogado');
    expect(usuario).to.eq('admin');

    // step 1 cadastro de curso pós-graduação


    cy.get('p.truncate.text-center.text-xl.font-semibold').contains('Acessos').click();
    cy.get('p.text-xl.font-normal').contains('Pessoas').click();
    cy.get('p.undefined').contains('Nova +').click();



    cy.get('input[placeholder="Digite o nome da Pessoa..."]')
      .should('be.visible')
      .type('João da Silva');



    cy.contains('label', 'Raça*')
      .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
      .within(() => {
        cy.get('select[name="racaId"]').select('Branca'); // exemplo quando seletor for select com valor pré-definidos, com name do componente.
      });



    cy.contains('label', 'Gênero*')
      .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
      .within(() => {
        cy.get('select[name="generoId"]').select('Masculino'); // exemplo quando seletor for select com valor pré-definidos, com name do componente.
      });

    cy.get('input[name="nascimento"]').type('2000-01-01')
   
  });
});
