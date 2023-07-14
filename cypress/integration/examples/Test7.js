/// <reference types="Cypress" />


 
describe('My fifth Test Suite', function()

{

it('My FirstTest case',function() {

    cy.visit(Cypress.env('url') + '/AutomationPractice/');

   cy.get('#opentab').then(function(e1){

    const url = e1.prop('href');
    cy.visit(url);
    cy.origin(url, ()=>{

        cy.get('div.sub-menu-bar a[href*="about"]').click();

        });
    
   
    });



}  );
 
 
 
}  )