Feature: Register for daily email updates on rental property in London
  As a customer I want to register for a daily email updates on rental property

  Scenario: Register for daily email updates on rental property in London
    Given I navigate to page "https://www.zoopla.co.uk/"
    When I sign in
    And  I navigate to page "https://www.zoopla.co.uk/for-sale/flats/wembley/oakington-avenue/?page_size=25&price_max=325000&price_min=300000&property_sub_type=flats&view_type=list&q=Wayside%20Court%2C%20Oakington%20Avenue%2C%20Wembley%20HA9&radius=0&results_sort=highest_price&search_source=refine"
    Then I see 1 results


