Feature: Home Page
  As a customer I want to see fileds displayed as well as I can do search on the home page

  Scenario: Verify home page
    Given I navigate to home page "https://etherscan.io"
    When the web page is showing the title "The Ethereum Blockchain Explorer"
    Then I see the non-empty market cap

  Scenario: Verify search
    Given I navigate to home page "https://etherscan.io"
    When I search the wallet address "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a"
    Then I see more than 2 transactions

