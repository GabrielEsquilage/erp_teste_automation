describe('Valida Cadastro de Curriculo', () => {
    before(() => {
        cy.loginERP('admin', '7Y/6p0p\\iYd{');
    });

    it('valida o login armazenado', () => {
        const usuario = Cypress.env('usuarioLogado');
        expect(usuario).to.eq('admin');

        // step 1 cadastro de curso pós-graduação


        cy.get('p.truncate.text-center.text-xl.font-semibold').contains('Acadêmico').click();
        cy.get('p.text-xl.font-normal').contains('Disciplinas').click();
        cy.get('button').contains('Novo +').click();


        cy.wait(2500);

        cy.get('input[placeholder="Nome da disciplina"]')
            .should('be.visible')
            .type('Fundamentos de Engenharia da Computação');

        cy.get('input[placeholder="Código da disciplina"]')
            .should('be.visible')
            .type('FUNENGCOMP');

        cy.get('input[placeholder="Código no Moodle"]')
            .should('be.visible')
            .type('25262');

        cy.get('input[placeholder="Carga horária"]')
            .should('be.visible')
            .type('200');

        cy.contains('label', 'Colaborador')
            .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
            .within(() => {
                cy.contains('span', 'Selecione uma opção').click(); // clica no input correto dentro do grupo - teste (deu certo, replicar para proximos)
                cy.contains('div', 'Admin').click(); // seleciona a opção - teste (deu certo, replicar para proximos)
            });

        cy.get('button').contains('Avançar').click();

        //step2 - apos definição de avaliações, setar rotina neste bloco

        cy.get('button[form="wizard-form-1"]').click();

        //step 3 - após definição de provas, setar rotina neste bloco

        cy.get('button[form="wizard-form-2"]').click();

        //step4 - após ficar pronto a equivalencia, inserir rotina automatizada neste bloco

        cy.get('button[form="wizard-form-3"]').click();

        //concluir

        cy.get('button[form="wizard-form-4"]').click();

    });
});

