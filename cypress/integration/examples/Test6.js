/// <reference types="Cypress" />


 
describe('My fifth Test Suite', function()

{

it('My FirstTest case',function() {

    cy.visit(Cypress.env('url') + '/AutomationPractice/');

    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include', 'top')




}  )
 
 
 
}  )