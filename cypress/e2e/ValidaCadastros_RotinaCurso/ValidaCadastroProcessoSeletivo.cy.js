describe('Valida Cadastro de Processo Seletivo', () => {
    before(() => {
        cy.loginERP('admin', '7Y/6p0p\\iYd{');
    });

    it('valida o login armazenado', () => {
        const usuario = Cypress.env('usuarioLogado');
        expect(usuario).to.eq('admin');

        // step 1 cadastro de curso pós-graduação


        cy.get('p.truncate.text-center.text-xl.font-semibold').contains('Processos Seletivos').click();
        cy.get('.mb-3').contains('Processos seletivos').click();
        cy.get('p.undefined').contains('Novo +').click();


        cy.wait(2500);

//step1

        cy.get('input[placeholder="Escreva o nome do Processo Seletivo..."]')
            .should('be.visible')
            .type('PS POS 2025.13');

        cy.contains('label', 'Nível de Ensino*')
            .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
            .within(() => {
               cy.get('input[placeholder="Selecione"]').click(); // clica no input correto dentro do grupo - teste (deu certo, replicar para proximos)
            });
        cy.contains('span', 'Pós-Graduação').click();
          

        cy.get('input[placeholder="Código do Processo..."]')
            .should('be.visible')
            .type('PPOS25_13');

        cy.contains('label', 'Período Letivo*')
            .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
            .within(() => {
               cy.get('input[placeholder="Selecione"]').click(); // clica no input correto dentro do grupo - teste (deu certo, replicar para proximos)
            });
        cy.contains('Pós Graduação 2025.7').click();

        cy.contains('label', 'Edital*')
            .parent() // sobe para o container do campo- teste (deu certo, replicar para proximos)
            .within(() => {
               cy.get('input[placeholder="Selecione"]').click(); // clica no input correto dentro do grupo - teste (deu certo, replicar para proximos)
            });
        cy.contains('Pós Graduação 2025').click();

        cy.contains('button', 'Avançar').click();

// step 2 -> criação do concurso

         cy.contains('button', 'Novo Concurso +').click();

// Será interessando mais pra frente, a criação de uma entidade chamada concurso, vinculado a um processo seletivo, hoje esses cadastros estão juntos no mesmo local.

        cy.get('input[placeholder="Escreva o nome do Concurso..."]')
            .should('be.visible')
            .type('2025_Vestibular_0720');

        cy.get('input[name="inicioConcurso"]').type('2025-07-01');

        cy.get('input[name="fimConcurso"]').type('2025-07-30');

        cy.contains('button', 'Avançar').click();

//step2 - criação concurso -> Relativo as provas

        cy.contains('label', 'Tipo de Concurso*')
            .parent()
            .click()

        cy.contains('button', 'Avançar').click()

//step 3 - criação concurso -> seleção de areas de conhecimento      

        cy.contains('div', 'Todas')
            .find('button')
            .should('be.visible')
            .click();

        cy.wait(2500);

        cy.contains('button', 'Avançar').click();

//step 4 - seleciona cursos para o concurso
        cy.get('.flex.font-semibold > .flex > .my-auto').click()
        //cy.contains('div', 'Selecionar todos')
          //  .prev('div') // pega o <div> anterior (o "checkbox")
            //.click();
        
        cy.wait(10000);

        cy.contains('button', 'Avançar').click();

//step 5 - Seleciona filiais
        
        
        cy.contains('span', 'Selecionar todas as filiais')
            .prev('div') // pega o <div> anterior (o "checkbox")
            .click();

        cy.wait(10000);

        cy.contains('button', 'Avançar').click();

//step 6 -> Valorer Curso / Filial

        cy.contains('button', 'Não alterar')
            .should('be.visible')
            .and('not.be.disabled')
            .click();

//step7 - Validação

        cy.contains('button', 'Concluir').click();

//volta pra step de processo, para avançar e concluir

        cy.contains('button', 'Avançar').click();

//conclui cadastro de processo

        cy.contains('button', 'Concluir').click();



        cy.contains('button', 'Concluir').click();

//decide se quer ou não sincronizar com moodle - para teste, selecionar Agora não

    });
});        