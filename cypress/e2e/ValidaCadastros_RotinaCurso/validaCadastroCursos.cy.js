describe('Valida Cadastro de Curso', () => {
  before(() => {
    cy.loginERP('admin', '7Y/6p0p\\iYd{');
  });

  it('valida o login armazenado', () => {
    const usuario = Cypress.env('usuarioLogado');
    expect(usuario).to.eq('admin');

    // step 1 cadastro de curso pós-graduação


    cy.get('p.truncate.text-center.text-xl.font-semibold').contains('Acadêmico').click();
    cy.get('p.text-xl.font-normal').contains('Cursos').click();
    cy.get('p.undefined').contains('Novo +').click();


    cy.wait(2500);


    cy.get('input[placeholder="Digite o nome do curso..."]')
      .should('be.visible')
      .type('Engenharia da Computação__21');
    //
    cy.get('input[placeholder="Digite o código do curso...')
      .should('be.visible')
      .type('_ENGCOMP200')
    //
    cy.contains('label', 'Nível de Ensino')
      .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
      .within(() => {
        cy.contains('div', 'Selecione uma opção').click(); // clica no input correto dentro do grupo - teste (deu certo, replicar para proximos)
      });

    cy.contains('div', 'Pós-Graduação').click(); // seleciona a opção - teste (deu certo, replicar para proximos)
    //

    // 1. Localiza o campo "Tipo de Curso"
    cy.intercept('GET', '**/api/v1/tipo-curso/list?&nivelEnsino.id=2').as('getTiposCurso');

    // Clica na seta para carregar os tipos de curso (após o nível de ensino estar selecionado)
    cy.contains('label', 'Tipo de Curso')
      .parent()
      .within(() => {
        cy.get('svg.lucide-chevron-down').click();
      });
    cy.wait(5000);

    cy.get('span.text-xl.truncate.hover\\:bg-gray-100').contains('MBA').click();

    // seleciona area de conhecimento

    cy.contains('label', 'Área de Conhecimento')
      .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
      .within(() => {
        cy.contains('p', 'Selecione uma opção').click(); // clica no input correto dentro do grupo - teste (deu certo, replicar para proximos)
      });

    cy.contains('div', 'Ciências da Saúde').click(); // seleciona a opção - teste (deu certo, replicar para proximos)

    //seleciona modalidade

    cy.contains('label', 'Modalidade')
      .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
      .within(() => {
        cy.contains('div', 'Selecione uma opção').click(); // clica no input correto dentro do grupo - teste (deu certo, replicar para proximos)
      });

    cy.contains('div', 'Ambas').click(); // seleciona a opção - teste (deu certo, replicar para proximos)

    //cadastra codigo inep, hab masc, hab fem

    cy.get('input[placeholder="Digite o código INEP/MEC..."]')
      .type('12345');

    cy.get('input[placeholder="Digite a habilitação masculina..."]')
      .type('N/A');

    cy.get('input[placeholder="Digite a habilitação feminina..."]')
      .type('N/A');

    cy.get('input[placeholder="Digite o grau conferido..."]')
      .type('N/A');

    cy.get('input[placeholder="Digite o número de vagas anuais..."]')
      .type('100');

    cy.get('input[placeholder="Digite o início de funcionamento..."]')
      .type('2025-06-23')

    // seleciona coordenador

    cy.contains('label', 'Coordenador do Curso')
      .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
      .within(() => {
        cy.get('input').click(); // clica no input correto dentro do grupo - teste (deu certo, replicar para proximos)
      });

    cy.contains('span', 'Admin').click(); // seleciona a opção - teste (deu certo, replicar para proximos)

    // insere descrição do curso

    cy.get('textarea[placeholder="Escreva a descrição do conhecimento do curso"]')
      .type('Descrição de teste automatizado');

    //passa de step

    cy.get('p.undefined').contains('Avançar').click()

    //step 2 cadastro de curso de pós-graduação

    cy.get('textarea[placeholder="Digite a resolução do curso..."]')
      .type('Descrição de teste automatizado');

    //passa de step

    cy.get('p.undefined').contains('Avançar').click()

    cy.get('p.undefined').contains('Concluir').click()

  });
});
