Feature: Free CRM Deals Map Feature

Scenario: Free CRM Deals Map Test Scenario

Given user is already on Login Page for deals map test
When title of login page is Free CRM for deals map test
Then user enters username and password for deals map test
	|username |	password |
  	|Apptrix  | Test@123 |
Then user clicks on login button for deals map test
Then user is on home page for deals map test
Then user moves to new deals map page
Then user enters deals details for map
	|	title	| amount| Probability	| commision	|
	| Test deal1| 1000 	| 	50 			| 	10 		|
	| Test deal2| 2000 	| 	40 			| 	10 		|
	| Test deal3| 3000 	| 	60 			| 	20 		|
	| Test deal4| 4000 	| 	70 			| 	30 		|
Then Close the browser of dealsMap page