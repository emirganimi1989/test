describe('login', ()=>{    
    it('hacemos login', ()=>{
        cy.viewport('iphone-6')
        cy.visit('/');
    });

    it('ingresamos usuario y contraseña', ()=>{
        cy.viewport('iphone-6')
        cy.get('#email-login > .text-input').type("emir.ganimi@globant.com");
        cy.get('#password-login > .text-input').type("123456", {force: true});
        cy.get('#button-login').click();

        cy.get(".toolbar-title").contains("TODO");
    });
});