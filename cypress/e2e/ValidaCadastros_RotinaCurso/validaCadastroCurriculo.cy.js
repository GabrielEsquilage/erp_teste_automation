describe('Valida Cadastro de Curriculo', () => {
    before(() => {
        cy.loginERP('admin', '7Y/6p0p\\iYd{');
    });

    it('valida o login armazenado', () => {
        const usuario = Cypress.env('usuarioLogado');
        expect(usuario).to.eq('admin');

        // step 1 cadastro de curso pós-graduação


        cy.get('p.truncate.text-center.text-xl.font-semibold').contains('Acadêmico').click();
        cy.get('p.text-xl.font-normal').contains('Currículos').click();
        cy.get('p.undefined').contains('Novo +').click();


        cy.wait(2500);

        cy.get('input[placeholder="Escreva o nome do currículo..."]')
            .should('be.visible')
            .type('Matriz Engenharia da Computação_11')
        cy.get('input[placeholder="Escreva o código do currículo..."]')
            .should('be.visible')
            .type('M_ENGvvv');


        cy.contains('label', 'Nível de Ensino')
            .parent()
            .within(() => {
                cy.get('input').click();
            });

        // Seleciona a opção (ajuste a tag se não for span)
        cy.contains('div', 'Pós-Graduação').click();

        // 3. Valida que o valor foi aplicado no input
        cy.get('input[placeholder="Selectione uma opção..."]').should('have.value', 'Pós-Graduação');

        cy.contains('label', 'Curso*')
            .parent()
            .within(() => {
                cy.get('input').click().type('Engenharia da Computação');

            });
        cy.contains('div', 'Engenharia da Computação', { timeout: 5000 }).click();

        cy.wait(1000)

        cy.get('input[name="horaAtividadeComplementar"]').type('25');

        cy.get('input[name="horaAtividadeExtensao"]').type('10');

        cy.get('input[placeholder="____,__"]').type('200000')

        cy.get('textarea[name="observacao"').type('teste, teste, teste, teste')

        cy.contains('button', 'Avançar').click();

        // step 2 cadastro de curso pós-graduação

        cy.get('input[placeholder = "Pesquisar..."]').type('Fundamentos de Engenharia da Computação')
        cy.contains('div', 'Engenharia da Computação', { timeout: 5000 }).click();

        cy.contains('button', 'Avançar').click();

        // step 3

        cy.contains('label', 'Série*')
            .parent()
            .within(() => {
                cy.get('input').click();
            });

        cy.wait(1000)
        // Seleciona a opção (ajuste a tag se não for span)
        cy.contains('div', 'Série 1').click();

        cy.contains('label', 'Tipo da Disciplina*')
            .parent()
            .within(() => {
                cy.get('input').click();
            });

        // Seleciona a opção (ajuste a tag se não for span)
        cy.contains('div', 'Regular').click();

        cy.contains('label', 'Classificação*')
            .parent()
            .within(() => {
                cy.get('input').click();
            });

        // Seleciona a opção (ajuste a tag se não for span)
        cy.contains('div', 'Padrão').click();


        cy.contains('label', 'Total de Créditos')
            .parent()
            .within(() => {
                cy.get('input').type('100');
            });

        cy.contains('label', 'Nota Mínima para Aprovação (%)*')
            .parent()
            .within(() => {
                cy.get('input').type('60');
            });


        cy.wait((500))
        cy.contains('label', 'Tipo da Nota*')
            .parent()
            .within(() => {
                cy.get('input').click();
            });

        // Seleciona a opção (ajuste a tag se não for span)
        cy.contains('div', 'Média').click();


        cy.wait((500))
        cy.contains('label', 'Nota Mínima para Aprovação (%)*')
            .parent()
            .within(() => {
                cy.get('input').type('60');
            });

        cy.wait((500))
        cy.contains('label', 'Valor da Disciplina')
            .parent()
            .within(() => {
                cy.get('input').type('6000');
            });

        cy.wait((500))
        cy.contains('label', 'Observação')
            .parent()
            .within(() => {
                cy.get('textarea').type('teste teste teste teste teste');
            });

        cy.wait((500))
        cy.contains('label', 'Nota?*')
            .parent()
            .within(() => {
                cy.contains('div', 'Sim').click();
            });

        cy.wait((500))

        cy.contains('button', 'Avançar').click();

        //step 4

        cy.get('input[placeholder = "Pesquisar..."]').type('Teste plano pagamento')
        cy.contains('p', 'Teste plano pagamento', { timeout: 5000 }).click();

        cy.contains('button', 'Avançar').click();

        //Etapa de Conclusçao

        cy.contains('button', 'Concluir').click();

    });


});

