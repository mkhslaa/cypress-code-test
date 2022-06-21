import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

When(
  /^I submit the GET request for a list of transactions "([^"]*)"$/,
  async (uri) => {
    cy.apiGet(uri)
    cy.get('@apiGet').then((object) => {
      cy.log('object to check a list of transcation', object['status'])
      expect(object['status']).equal(200)
    })
  }
)

Then(
  /^I validate block number to be not null for each of transactions$/,
  async () => {
    cy.get('@apiGet').then((object) => {
      cy.log(JSON.stringify(object))
      expect(object['status']).equal(200)

      // Verify blockNumber is not null
      for (let key in object['body']['result']) {
        const blockNumber = object['body']['result'][key]['blockNumber']
        expect(blockNumber).to.not.equal(null)
      }
    })
  }
)
