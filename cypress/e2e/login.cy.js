describe('Login ERP', () => {
  before(() => {
    cy.loginERP('admin', '7Y/6p0p\\iYd{');
  });

  it('valida o login armazenado', () => {
    const usuario = Cypress.env('usuarioLogado');
    expect(usuario).to.eq('admin');
  });
});
