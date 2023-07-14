/// <reference types="Cypress" />
import AppDemo from "../pageObjects/AppDemo";
import { describe, it } from "mocha";
const appDemo = new AppDemo;


describe('My test suite', ()=>{
    

    it('Request test', ()=>{

        cy.intercept({

            method:'GET',
            url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{
            statusCode: 200,
            body:[{
                book_name: 'RestAssured with java',
                isbn: 'RSU',
                aisle: 2301
        }]
        }).as('retrievals')

        cy.visit(Cypress.env('urlAppdemo'))
        appDemo.getLibraryBtn().click()
        
        cy.wait('@retrievals')






    })
})