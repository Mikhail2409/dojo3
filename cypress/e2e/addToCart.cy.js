describe('sauceDemo', () => {
  it('authentification', () => {
      cy.visit('https://www.saucedemo.com')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      //Ajout d'un produit au panier sur saucedemo
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('.shopping_cart_link').click()
      cy.get('#shopping_cart_container').should('have.text', '1')
      //Remplir le formulaire du facturation
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="firstName"]').type('Mikhail')
      cy.get('[data-test="lastName"]').type('Li')
      cy.get('[data-test="postalCode"]').type('12345')
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()
      cy.get('[data-test="back-to-products"]').click()
  })
})