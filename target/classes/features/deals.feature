Feature: Free CRM Deals Feature

Scenario: Free CRM Deals Test Scenario

Given user is already on Login Page for deals test
When title of login page is Free CRM for deals test
Then user enters username and password for deals test
  |Apptrix | Test@123|
Then user clicks on login button for deals test
Then user is on home page for deals test
Then user moves to new deals page
Then user enters deals details
| Test deal | 100 | 60 | 10 |
Then Close the browser of deals page