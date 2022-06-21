Feature: Etherscan Transactions REST API
  As a customer I want to see a list of transactions via api
  Scenario: List of transactions
    When I submit the GET request for a list of transactions "https://api.etherscan.io/api?module=account&action=txlist&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&startblock=0&endblock=99999999&sort=asc&apikey=HJBWP2H2H3BICSFCBT8AIJEZ4DYZDJDANH"
    Then I validate block number to be not null for each of transactions


