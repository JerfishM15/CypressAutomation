class ProductPage{

    checkOutBtn(){
        return cy.get('.nav-link.btn.btn-primary')
    }
}

export default ProductPage;