/// <reference types="Cypress" />

//import { wrap } from "cypress/types/lodash";

 
describe('My fourth Test Suite', function()

{

it('My FirstTest case',function() {
 
 
cy.visit(Cypress.env('url') + '/AutomationPractice/');

//Pop ups
cy.get('#alertbtn').click()
cy.get('#confirmbtn').click()

cy.on('window:alert', (str) =>{

    expect(str).to.equal('Hello , share this practice page and share your knowledge')
    
})

cy.on('window:confirm', (str) =>{

    expect(str).to.equal('Hello , Are you sure you want to confirm?')

    return false
    
})

cy.get('#opentab').invoke('removeAttr', 'target').click()

cy.url().should('include', 'qaclickacademy')

cy.go('back')



}  )
 
 
 
}  )