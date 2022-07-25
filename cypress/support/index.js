// The name of the cookie holding whether the user has accepted
// the cookie policy
const COOKIE_NAME = 'Allow all'
// The value meaning that user has accepted the cookie policy
const COOKIE_VALUE = 'ACCEPTED'

Cypress.on('window:before:load', (window) => {
  window.document.cookie = `{"schemaVersion":4,"content":{"brand":1,"consents":[{"apiVersion":1,"stored":false,"date":"Thu, 23 Jun 2022 20:39:20 GMT","categories":[{"id":1,"consentGiven":true},{"id":3,"consentGiven":true},{"id":4,"consentGiven":true}]}]}}`
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
