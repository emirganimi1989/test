describe('visitamos google', ()=>{
    it('visitamos google y verificamos que estamos en la web correcta', () => {
        cy.visit('https://www.google.cl/');
        cy.contains('Google');
    });
});