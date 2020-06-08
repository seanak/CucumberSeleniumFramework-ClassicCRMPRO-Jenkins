$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/seana/New Workspace/freecrmBDDFramework/src/main/java/features/dealsMap.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Deals Map Feature",
  "description": "",
  "id": "free-crm-deals-map-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Deals Map Test Scenario",
  "description": "",
  "id": "free-crm-deals-map-feature;free-crm-deals-map-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page for deals map test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM for deals map test",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password for deals map test",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "Apptrix",
        "Test@123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button for deals map test",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page for deals map test",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new deals map page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deals details for map",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "Probability",
        "commision"
      ],
      "line": 14
    },
    {
      "cells": [
        "Test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 15
    },
    {
      "cells": [
        "Test deal2",
        "2000",
        "40",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "Test deal3",
        "3000",
        "60",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "Test deal4",
        "4000",
        "70",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Close the browser of dealsMap page",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsMapStepDefination.user_is_already_on_Login_Page_for_deals_map_test()"
});
formatter.result({
  "duration": 19029777200,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.title_of_login_page_is_Free_CRM_for_deals_map_test()"
});
formatter.result({
  "duration": 128228900,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_enters_username_and_password_for_deals_map_test(DataTable)"
});
formatter.result({
  "duration": 886187500,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_clicks_on_login_button_for_deals_map_test()"
});
formatter.result({
  "duration": 7501089800,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_is_on_home_page_for_deals_map_test()"
});
formatter.result({
  "duration": 23112300,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_moves_to_new_deals_map_page()"
});
formatter.result({
  "duration": 2028535200,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_enters_deals_details_for_map(DataTable)"
});
formatter.result({
  "duration": 10033565300,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.close_the_browser_of_dealsMap_page()"
});
formatter.result({
  "duration": 1013142000,
  "status": "passed"
});
});