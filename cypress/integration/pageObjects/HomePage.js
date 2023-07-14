class HomePage{


getEditBox() {

    return cy.get('input[name="name"]:nth-child(2)');
}

getGender(){
    return cy.get('#exampleFormControlSelect1');

}

getTwoWayDataBinding(){
    return  cy.get(':nth-child(4) > .ng-untouched');
}

getEntrepeneur(){
    return cy.get('#inlineRadio3');
}

getShopTab(){
    return cy.get(':nth-child(2) > .nav-link');
}

}

export default HomePage;