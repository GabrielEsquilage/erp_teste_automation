describe('Valida Cadastro de Curriculo', () => {
    before(() => {
        cy.loginERP('admin', '7Y/6p0p\\iYd{');
    });

    it('valida o login armazenado', () => {
        const usuario = Cypress.env('usuarioLogado');
        expect(usuario).to.eq('admin');

        // step 1 cadastro de curso pós-graduação


        cy.get('p.truncate.text-center.text-xl.font-semibold').contains('Financeiro').click();
        cy.get('p.text-xl.font-normal').contains('Planos de Pagamento').click();
        cy.get('button').contains('Novo +').click();


        cy.wait(2500);

        cy.get('input[placeholder="Escreva o nome do plano..."]')
            .should('be.visible')
            .type('Plano Pós 25x');

        cy.get('input[placeholder="Crie um código..."]')
            .should('be.visible')
            .type('PPOS25X');

        cy.get('#wizard-form-0 > .flex-col > :nth-child(2) > .flex').type('25')

        cy.get('.shadow-md').click()

        cy.get('#wizard-form-1 > .flex-col > .flex').click()

        cy.get('.col-span-4 > :nth-child(1) > .flex').type('Taxa Matricula')

        cy.contains('label', 'Tipo de Parâmetro*')
            .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
            .within(() => {
                cy.contains('span', 'Selecione uma opção').click(); // clica no input correto dentro do grupo - teste (deu certo, replicar para proximos)
            });
        
        cy.contains('Contribuição Social').click();

        cy.get('.grid > :nth-child(3) > .flex')
            .type('{selectall}{backspace}')
            .type('10');

        cy.get('.justify-between > .bg-brand-orange').click()

        cy.contains('button', 'Avançar').click()

//step4

        cy.intercept('GET', '**/api/v1/curriculo*').as('getCurriculos');


        cy.wait(7000)
        cy.contains('button', 'Selecionar currículos', { timeout: 10000 }).click();
        cy.wait('@getCurriculos').its('response.statusCode').should('eq', 200);
        cy.wait(7000)



        //cy.contains('button', 'Avançar').click()

        //cy.wait(500); // Espera breve para evitar conflitos com transições

    });
});

