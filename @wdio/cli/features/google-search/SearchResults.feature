Feature: Google Search

Scenario: Search from the search bar provides correct links
    Given a web browser is at the Google home page
    When the user enters "cucumber" into the search bar
    Then links related to "cucumber" are shown on the results page

