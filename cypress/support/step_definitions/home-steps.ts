import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { Selectors } from '../selectors/selectors'
import { Constants } from '../constants/constants'

Given(/^I navigate to page "([^"]*)"/, async (uri) => {
  cy.visit(uri)
})

When(/^I click email alert$/, async () => {
  cy.wait(2000)
  cy.get('[data-testid=bell] > svg').click()
  cy.wait(2000)
})

And(/^I register for the daily alert$/, async () => {
  cy.wait(5000)
  cy.get('#frequency_1').click()
})

When(/^I edit email alert$/, async () => {
  cy.wait(2000)
  cy.contains('Searches and alerts').click()
  cy.get('.myaccount-alert-action').eq(0).click()
  cy.wait(2000)
})

And(/^I register for the Instant property alert$/, async () => {
  cy.wait(5000)
  cy.contains('Edit saved search').click()
  cy.wait(100)
  cy.get('#frequency_0').click()
  cy.wait(1000)
})

And(/^I click my zoopla$/, () => {
  cy.wait(2000)
  cy.contains('My Zoopla').click()
})

Then(/^I see 1 results$/, () => {
  cy.contains('Flats for sale in Oakington Avenue, Wembley HA9').should(
    'be.visible'
  )
  cy.contains('1 results').should('be.visible')
})

Then(/^I see 1 results with the garage$/, () => {
  cy.contains('Fairway Gardens, Rownhams, Southampton SO16').should(
    'be.visible'
  )

  cy.contains('1 results').should('be.visible')

  cy.get('[data-testid="listing-price"]').click()
  cy.contains('See full description').click()
  cy.contains('double garage').should('be.visible')
})
