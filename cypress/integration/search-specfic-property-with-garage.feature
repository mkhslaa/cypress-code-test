Feature: Serach specific property with garage
  As a customer I want to register for a daily email updates on rental property

  Scenario: Search specific property with garage
    Given I navigate to page "https://www.zoopla.co.uk/"
    When I sign in
    And  I navigate to page "https://www.zoopla.co.uk/for-sale/houses/so16/?keywords=DOUBLE%20GARAGE&page_size=25&price_max=700000&price_min=700000&property_sub_type=detached&view_type=list&q=Southampton%2C%20SO16&radius=0&results_sort=newest_listings&search_source=refine"
    Then I see 1 results with the garage


