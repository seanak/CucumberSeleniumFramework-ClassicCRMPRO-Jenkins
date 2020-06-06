$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/seana/New Workspace/freecrmBDDFramework/src/main/java/features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Deals Feature",
  "description": "",
  "id": "free-crm-deals-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Deals Test Scenario",
  "description": "",
  "id": "free-crm-deals-feature;free-crm-deals-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page for deals test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM for deals test",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password for deals test",
  "rows": [
    {
      "cells": [
        "Apptrix",
        "Test@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button for deals test",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page for deals test",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters deals details",
  "rows": [
    {
      "cells": [
        "Test deal",
        "100",
        "60",
        "10"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close the browser of deals page",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefinition.user_is_already_on_Login_Page_for_deals_test()"
});
formatter.result({
  "duration": 20039117400,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.title_of_login_page_is_Free_CRM_for_deals_test()"
});
formatter.result({
  "duration": 47272000,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_username_and_password_for_deals_test(DataTable)"
});
formatter.result({
  "duration": 888034900,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_login_button_for_deals_test()"
});
formatter.result({
  "duration": 8937374500,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_is_on_home_page_for_deals_test()"
});
formatter.result({
  "duration": 16182800,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 2371651900,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_deals_details(DataTable)"
});
formatter.result({
  "duration": 2713608800,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.close_the_browser_of_deals_page()"
});
formatter.result({
  "duration": 1087893200,
  "status": "passed"
});
});