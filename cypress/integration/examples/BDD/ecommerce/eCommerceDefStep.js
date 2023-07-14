import ProductPage from "../../../pageObjects/ProductPage";
import HomePage from "../../../pageObjects/HomePage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const homePage = new HomePage;
const productPage = new ProductPage;

Given('I open Ecommerce page', ()=>{

    cy.visit(Cypress.env('url'))
})

//when i add items to cart
When('I add items to cart', function(){
    
    
    homePage.getShopTab().click()


    this.data.productName.forEach(element => {
        
        cy.selectProduct('.card-title', element)
    });
    productPage.checkOutBtn().click()
})

When('Validate the total prices', ()=>{
    var sum = 0;

    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

        const amount= $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)

    }).then(function(){

        cy.log(sum)
    })

    cy.get('h3 strong').then(function(element){

        const amount= element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
    })
})

Then('Select the country and check the message', ()=>{
    cy.contains('Checkout').click()

    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('input#checkbox2').check({force:true})
    cy.get('input[type="submit"]').click()
    cy.get('.alert').then(function(element){

        const actualText = element.text()
        expect(actualText.includes('Success')).to.be.true
    })
})


When('I fill the form details',function(){
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)

})

When('Validate the forms behavior', function(){
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepeneur().should('be.disabled')
})

Then('Select the shop page', function(){
    homePage.getShopTab().click()
})