/// <reference types="Cypress" />

//import { wrap } from "cypress/types/lodash";

 
describe('My Third Test Suite', function()

{

it('My FirstTest case',function() {
 
 
cy.visit(Cypress.env('url') + '/AutomationPractice/');

//check boxes
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
cy.get('input[type="checkbox"]').check(['option3', 'option2']);
 
 //dropdowns
 cy.get('select').select('option2').should('have.value', 'option2');
 
 //dinamic dropdowns

 cy.get('#autocomplete').type('Dom')

 cy.get('.ui-menu-item').each(($el, index, $list) =>{
    
    if($el.text() === 'Dominican Republic'){
        cy.wrap($el).click();
    }
 })
 //visible and not visbles attirbutes
 cy.get("#displayed-text").should('be.visible')
 cy.get('#hide-textbox').click()
 cy.get('#displayed-text').should('not.be.visible')
 cy.get('#show-textbox').click()
 cy.get("#displayed-text").should('be.visible')
 
 
 //radio buttons
 cy.get('[value="radio2"]').check().should('be.checked').and('have.value', 'radio2')

//fixture
 
}  )
 
 
 
}  )