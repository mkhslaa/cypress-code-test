# cypress-code-test
Automate using Cypress Cucumber Typescript
Automate https://etherscan.io/ ui tests

Automate https://docs.etherscan.io/api-endpoints/accounts#get-a-list-of-normal-transactions-by-address api tests

Cypress, latest testing Framework has been used along with Cucumber and TypeScript

## Feature Files

There are 2 Cucumber BDD feature files in the integration folder:
* `homepage.feature` - this feature file contains the scenarios to verify field and search
* `transactions.feature` - this feature file contains the scenarios for api



In order to execute scripts, simply run on:

* Gitbash
```
npm install
npx cypress open
It opens up a GUI. Click the feature file to execute

On command line:
npx cypress run
npm run report (produces HTML report in cypress/test-results folder)
npm run pretest ( to clean up old reports)

```
## GitHub Action

Actions: Generate Cypress Report is triggered on git push
Switch to gh-pages branch
Inside test-results folder, there is an html folder.
Inside html folder, there is index.html that is cucumber report
On browser, enter URL to view html cucumber report: https://htmlpreview.github.io/?https://github.com/mkhslaa/cypress-code-test/blob/gh-pages/test-results/html/index.html

## Tests

Gherkin BDD is being used to describe the test.
We have tried to avoid Page Object Pattern.

## Future
* Develop some custom commands for many helpers
* Remove arbitary delays
* Upgrade to Cypress 10
