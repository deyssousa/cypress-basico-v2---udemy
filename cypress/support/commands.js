Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Deys')
    cy.get('#lastName').type('Sousa')
    cy.get('#email').type('deyslima38@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="Submit"]').click()
})