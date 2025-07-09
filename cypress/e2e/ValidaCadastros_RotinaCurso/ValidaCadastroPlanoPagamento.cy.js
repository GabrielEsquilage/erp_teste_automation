describe('Valida Cadastro de Plano de Pagamento', () => {
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
            .type('Plano Pós 20vv20');

        cy.get('input[placeholder="Crie um código..."]')
            .should('be.visible')
            .type('PPOS205_Z');

        cy.get('#wizard-form-0 > .flex-col > :nth-child(2) > .flex').type('25')

        cy.get('.shadow-md').click()

        cy.get('#wizard-form-1 > .flex-col > .flex').click()

        cy.get('.col-span-4 > :nth-child(1) > .flex').type('Taxa Matricula')

        cy.contains('label', 'Tipo de Parâmetro*')
            .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
            .within(() => {
                cy.contains('div', 'Selecione uma opção').click(); // clica no input correto dentro do grupo - teste (deu certo, replicar para proximos)
            });
        
        cy.contains('Contribuição Social').click();

        cy.get('.grid > :nth-child(3) > .flex')
            .type('{selectall}{backspace}')
            .type('10');

        cy.get('.justify-between > .bg-brand-orange').click()

        cy.contains('button', 'Avançar').click()

//step4


        cy.contains('button', 'Selecionar currículos').click({ force: true });

//volta pra step 4 com os curriculos carregados

        cy.contains('button', 'Voltar').click()

// na step 4, pesquisa curriculo
        
        cy.get('.size-full > .flex-col.items-center > .flex-col > :nth-child(1) > .flex').type('Matriz Engenharia da Computação_3')
        cy.get('input[type="checkbox"].cursor-pointer', { timeout: 2500 }).check();

        cy.contains('button', 'Avançar').click()

// step 5, conclui com um curriculo selecionado para o plano de pagamento

        cy.contains('button', 'Concluir').click()

    });
});


