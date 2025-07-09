describe('Valida Cadastro de Processo Seletivo', () => {
    it('valida o Lp Pos=graduação', () => {
        cy.visit('https://matriculapos.fatecie.edu.br/inscription')
        

        cy.get('input[placeholder="Digite o seu nome"]')
            .should('be.visible')
            .type('João da Silva');

        cy.get('input[placeholder="Digite seu nome social"]')
            .should('be.visible')
            .type('joana da silva');

        cy.get('input[placeholder="Digite o CPF"]')
            .should('be.visible')
            .type('474.215.238-71');
        
        cy.get(':nth-child(2) > :nth-child(2) > .justify-between > .flex > .w-full').type('1991-12-10')

        cy.get(':nth-child(3) > :nth-child(1) > .justify-between > .flex > .w-full').type('44998567307')

        cy.get('input[placeholder="Digite o e-mail"]')
            .should('be.visible')
            .type('rebecajlutz@armyspy.com');

        cy.contains('button', 'Próximo').click()
    })    
});        