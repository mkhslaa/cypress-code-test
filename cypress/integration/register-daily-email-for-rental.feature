Feature: Register for daily email updates on rental property in London
  As a customer I want to register for a daily email updates on rental property

  Scenario: Register for daily email updates on rental property in London
    Given I navigate to page "https://www.zoopla.co.uk/"
    When I sign in
    And  I navigate to page "https://www.zoopla.co.uk/to-rent/property/wembley-park/?page_size=25&price_frequency=per_month&price_max=1000&price_min=800&view_type=list&q=Wembley%20Park%2C%20London&radius=0&results_sort=newest_listings&search_source=refine"
    When I click email alert
    And I register for the daily alert


