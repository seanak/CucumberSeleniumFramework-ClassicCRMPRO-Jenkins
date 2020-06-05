$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create contacts Feature",
  "description": "",
  "id": "free-crm-create-contacts-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM create new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts-feature;free-crm-create-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page of CRM",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user entering \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button of CRMPRO",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page of CRMPRO",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser of contacts page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts-feature;free-crm-create-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "free-crm-create-contacts-feature;free-crm-create-new-contact-scenario;;1"
    },
    {
      "cells": [
        "Apptrix",
        "Test@123",
        "Toonie",
        "lia",
        "Manager"
      ],
      "line": 16,
      "id": "free-crm-create-contacts-feature;free-crm-create-new-contact-scenario;;2"
    },
    {
      "cells": [
        "Apptrix",
        "Test@123",
        "Sweety",
        "Dsouza",
        "Director"
      ],
      "line": 17,
      "id": "free-crm-create-contacts-feature;free-crm-create-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM create new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts-feature;free-crm-create-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page of CRM",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user entering \"Apptrix\" and \"Test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button of CRMPRO",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page of CRMPRO",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Toonie\" and \"lia\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser of contacts page",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsSpepDefination.user_is_already_on_login_page_of_CRM()"
});
formatter.result({
  "duration": 12349287400,
  "status": "passed"
});
formatter.match({
  "location": "ContactsSpepDefination.title_of_the_page_is_Free_CRMPRO()"
});
formatter.result({
  "duration": 45272200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apptrix",
      "offset": 15
    },
    {
      "val": "Test@123",
      "offset": 29
    }
  ],
  "location": "ContactsSpepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 965427800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsSpepDefination.user_clicks_on_login_button_of_CRMPRO()"
});
formatter.result({
  "duration": 5509185700,
  "status": "passed"
});
formatter.match({
  "location": "ContactsSpepDefination.user_is_on_home_page_of_CRMPRO()"
});
formatter.result({
  "duration": 18645300,
  "status": "passed"
});
formatter.match({
  "location": "ContactsSpepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 2056336300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toonie",
      "offset": 29
    },
    {
      "val": "lia",
      "offset": 42
    },
    {
      "val": "Manager",
      "offset": 52
    }
  ],
  "location": "ContactsSpepDefination.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 3359336400,
  "status": "passed"
});
formatter.match({
  "location": "ContactsSpepDefination.close_the_browser_contacts_page()"
});
formatter.result({
  "duration": 1032048400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM create new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts-feature;free-crm-create-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page of CRM",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user entering \"Apptrix\" and \"Test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button of CRMPRO",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page of CRMPRO",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Sweety\" and \"Dsouza\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser of contacts page",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsSpepDefination.user_is_already_on_login_page_of_CRM()"
});
formatter.result({
  "duration": 12019140600,
  "status": "passed"
});
formatter.match({
  "location": "ContactsSpepDefination.title_of_the_page_is_Free_CRMPRO()"
});
formatter.result({
  "duration": 43528900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apptrix",
      "offset": 15
    },
    {
      "val": "Test@123",
      "offset": 29
    }
  ],
  "location": "ContactsSpepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 686652700,
  "status": "passed"
});
formatter.match({
  "location": "ContactsSpepDefination.user_clicks_on_login_button_of_CRMPRO()"
});
formatter.result({
  "duration": 8708984500,
  "status": "passed"
});
formatter.match({
  "location": "ContactsSpepDefination.user_is_on_home_page_of_CRMPRO()"
});
formatter.result({
  "duration": 16752700,
  "status": "passed"
});
formatter.match({
  "location": "ContactsSpepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1968340000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sweety",
      "offset": 29
    },
    {
      "val": "Dsouza",
      "offset": 42
    },
    {
      "val": "Director",
      "offset": 55
    }
  ],
  "location": "ContactsSpepDefination.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 3137438200,
  "status": "passed"
});
formatter.match({
  "location": "ContactsSpepDefination.close_the_browser_contacts_page()"
});
formatter.result({
  "duration": 980401200,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"Apptrix\" and \"Test@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8994296700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 112156200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apptrix",
      "offset": 13
    },
    {
      "val": "Test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 623156700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5992482300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 13144000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 999595800,
  "status": "passed"
});
});