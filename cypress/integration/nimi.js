describe('moro-nimi', function () {
  it('Syötä John Doe tekstikenttään', function () {
    debugger;
    cy.visit(Cypress.env('HOST') || 'index.html');
    cy.get('#nimi')
      .should('have.class', 'punainen')
      .type('John Doe')
      .should('not.have.class', 'punainen');
    cy.get('#moro-otsikko').contains('Moro John Doe');
  });
});