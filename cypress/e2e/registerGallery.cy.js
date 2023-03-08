/// <reference types="Cypress"/>

describe('Registration page "Gallery app"',()=>{
    beforeEach(()=>{
        cy.visit('/');
        
    })
    it('Try to register with empty fields',()=>{
        cy.get("button[type='submit']").click();
        cy.get("input[type='checkbox']").check();
        cy.url('/').should('contain','register');
    })
})