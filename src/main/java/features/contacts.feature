Feature: Free CRM create contacts Feature

Scenario Outline: Free CRM create new contact scenario

Given user is already on login page of CRM
When title of the page is CRMPRO
Then user entering "<username>" and "<password>"
Then user clicks on login button of CRMPRO
Then user is on home page of CRMPRO
Then user moves to new contact page
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then Close the browser of contacts page

Examples:
	| username | password | firstname | lastname | position |
	| Apptrix  | Test@123 | Toonie 	  | lia      | Manager  |
	| Apptrix  | Test@123 | Sweety 	  | Dsouza   | Director |	

