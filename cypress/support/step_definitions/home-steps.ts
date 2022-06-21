import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given(/^I navigate to home page "([^"]*)"/, async (uri) => {
  cy.visit(uri)
})

When(/^the web page is showing the title "([^"]*)"$/, async (title) => {
  cy.get('.h4.text-white').should(
    'contain.text',
    'The Ethereum Blockchain Explorer'
  )
})

Then(/^I see the non-empty market cap$/, async () => {
  cy.contains('Market Cap').next().should('not.be.empty')
})

When(/^I search the wallet address "([^"]*)"$/, async (address) => {
  cy.get('#txtSearchInput').type(address)
  cy.get('button[type="submit"]')
  cy.wait(100)
  cy.contains('Got It').click()
  cy.wait(100)
  cy.contains('View all transactions').click()
  cy.wait(1000)
})

Then(/^I see more than 2 transactions$/, async () => {
  cy.get('.table-responsive').find('tr').should('have.length.greaterThan', 2)
})
