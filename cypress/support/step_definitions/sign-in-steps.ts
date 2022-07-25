import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Selectors } from '../selectors/selectors'
import { Constants } from '../constants/constants'

When(/^I sign in$/, async () => {
  cy.contains(Selectors.SIGN_IN_TEXT).click()
  cy.wait(1000)

  const iframe = cy
    .get('#gdpr-consent-notice')
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
  iframe.find('#save').click()

  cy.get('[data-testid=email-field-input]')
    .clear()
    .type('manjeet.khalsa@yahoo.com')
  cy.get('[data-testid=password-field]').clear().type('Garden1968')
  cy.get('[data-testid=signin-button]').click()
})
