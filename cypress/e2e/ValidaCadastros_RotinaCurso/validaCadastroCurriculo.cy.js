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
    });
});

