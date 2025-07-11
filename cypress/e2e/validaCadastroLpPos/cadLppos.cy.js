describe('Valida Cadastro de Processo Seletivo', () => {
    it('valida o Lp Pos=graduação', () => {
        cy.visit('https://matriculapos.dev.fatecie.edu.br/inscription')
        

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

//step 2

        cy.contains('label', 'Digite seu CEP *')
            .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
            .within(() => {
        cy.get('input[id="cep"]').type('87080400');

    // Aguarda até o botão "Aplicar endereço" estar visível e habilitado
        //cy.contains('button', 'Aplicar endereço')
          //  .should('be.visible')       // o botão precisa estar visível
            //.and('not.be.disabled')     // e habilitado
            //.click();
      });

         //cy.get('input[placeholder="Digite o endereço do Lead"]')
      //      .should('be.visible')
        //    .type('rrua rua rua');

        cy.get('input[placeholder="Digite o número"]')
            .should('be.visible')
            .type('123');

            cy.wait(1500)
        cy.get('.ml-auto').click()

//step3

        cy.get('#«rd»-form-item').click()

        cy.get('[data-value="ESPECIALIZAÇÃO EM ENFERMAGEM DO TRABALHO"]').click();

        cy.contains('label', 'Estado *')
            .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
            .within(() => {
        cy.contains('div', 'Selecione um Estado').click();
        })

        cy.contains('div', 'Paraná').click()

//--------------------------------------//        

        cy.contains('label', 'Cidade *')
            .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
            .within(() => {
        cy.contains('div', 'Selecione uma cidade').click();
        })

        cy.contains('div', 'Maringá').click()

//--------------------------------------//

        cy.contains('label', 'Qual polo prefere estudar? *')
            .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
            .within(() => {
        cy.contains('div', 'Selecione um Polo').click();
        })

        cy.contains('div', 'MARINGÁ (Centro), - PR').click()

//--------------------------------------//

        cy.contains('label', 'Planos de Pagamento *')
            .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
            .within(() => {
        cy.contains('div', 'Selecione plano de pagamento').click();
        })

        cy.contains('div', '1 x 29.9 + 1 x 328.9').click()

//--------------------------------------//

        cy.contains('label', 'Dia de vencimento das mensalidades *')
            .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
            .within(() => {
        cy.contains('div', 'Selecione dia de vencimento').click();
        })

        cy.contains('div', '10').click()

//-------------------------------------//

        cy.get('input[placeholder="Digite o código do cupom"]')
            .should('be.visible')
            .type('teste100');

            cy.wait(1500)
        //cy.get('.ml-auto').click()

         cy.contains('button', 'Enviar').click()


         cy.contains('button', 'fechar').click()

    })    
});        