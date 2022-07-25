Feature: Change the email update
  As a customer I want to edit the email updates on rental property

  Scenario: Change the frequency of an existing email update
    Given I navigate to page "https://www.zoopla.co.uk/"
    When I sign in
    And I click my zoopla
    When I edit email alert
    And I register for the Instant property alert

