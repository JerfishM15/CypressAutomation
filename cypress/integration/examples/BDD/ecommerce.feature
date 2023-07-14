Feature: End to end Ecommerce validation

    Aplication Regression

    Scenario: Ecommerce product delivery
    Given I open Ecommerce page
    When I add items to cart
    And Validate the total prices
    Then Select the country and check the message


    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
    And Validate the forms behavior
    Then Select the shop page
    