/// <reference types="Cypress"/>

describe('Registration page "Gallery app"',()=>{
    beforeEach(()=>{
        cy.visit('/');
        
    })
    it('Try to register without any credentials',()=>{
        cy.get("button[type='submit']").click();
        cy.get("input[type='checkbox']").check();
        cy.url('/').should('contain','register');
    })
    it('Try to register without a First name',()=>{
        cy.get('#last-name').type('Jokic');
        cy.get('#email').type('nikolajokic@nba.com');
        cy.get('#password').type('somborskikonjic1');
        cy.get('#password-confirmation').type('somborskikonjic1');
        cy.get("input[type='checkbox']").check();
        cy.get("button[type='submit']").click();
        cy.url('/').should('contain','register');

    })
    it('Try to register with an invalid Email',()=>{
        cy.get("input[id='first-name']").type('Nikola');
        cy.get('#last-name').type('Jokic');
        cy.get('#email').type('nikolajokicnba.com');
        cy.get('#password').type('somborskikonjic1');
        cy.get('#password-confirmation').type('somborskikonjic1');
        cy.get("input[type='checkbox']").check();
        cy.get("button[type='submit']").click();
        cy.url('/').should('contain','register');
    })
    it('Try to register with an invalid Password(without a digit)',()=>{
        cy.get("input[id='first-name']").type('Nikola');
        cy.get('#last-name').type('Jokic');
        cy.get('#email').type('nikolajokic@nba.com');
        cy.get('#password').type('somborskikonjic');
        cy.get('#password-confirmation').type('somborskikonjic');
        cy.get("input[type='checkbox']").check();
        cy.get("button[type='submit']").click();
        cy.get('.alert-danger').should('contain','The password format is invalid');
        cy.url('/').should('contain','register');
    })
    it('Try to register with an invalid Password confirmation ',()=>{
        cy.get("input[id='first-name']").type('Nikola');
        cy.get('#last-name').type('Jokic');
        cy.get('#email').type('nikolajokic@nba.com');
        cy.get('#password').type('somborskikonjic1');
        cy.get('#password-confirmation').type('somborskikonjic');
        cy.get("input[type='checkbox']").check();
        cy.get("button[type='submit']").click();
        cy.get('.alert-danger').should('contain','The password confirmation does not match');
        cy.url('/').should('contain','register');
    })
    it('Try to uncheck terms & condition box',()=>{
        cy.get("input[id='first-name']").type('Nikola');
        cy.get('#last-name').type('Jokic');
        cy.get('#email').type('nikolajokic@nba.com');
        cy.get('#password').type('somborskikonjic1');
        cy.get('#password-confirmation').type('somborskikonjic1');
        cy.get("button[type='submit']").click();
        cy.get('.alert-danger').should('contain','The terms and conditions must be accepted');
        cy.url('/').should('contain','register');
    })
    it.only('Validate registering new user ',()=>{
        cy.get("input[id='first-name']").type('Nikola');
        cy.get('#last-name').type('Jokic');
        cy.get('#email').type('nikolajokic@nba.com');
        cy.get('#password').type('somborskikonjic1');
        cy.get('#password-confirmation').type('somborskikonjic1');
        cy.get("input[type='checkbox']").check();
        cy.get("button[type='submit']").click();
        cy.url('/').should('not.contain','register');
        
    })

 })

