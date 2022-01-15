$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SummerDress.feature");
formatter.feature({
  "name": "Buying Summer Dress",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify an item can be added to cart",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user hover over DRESSES and clicks on SUMMER DRESSES",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on the image of the dress",
  "keyword": "And "
});
formatter.step({
  "name": "selects \"\u003cquantity\u003e\", \"\u003csize\u003e\" and \"\u003ccolor\u003e\" of the dress",
  "keyword": "And "
});
formatter.step({
  "name": "adds one of the SUMMER DRESSES to the cart",
  "keyword": "And "
});
formatter.step({
  "name": "verify successfully added message appeared in the pop-up window",
  "keyword": "Then "
});
formatter.step({
  "name": "the user clicks on proceed to checkout button in the pop-up window",
  "keyword": "When "
});
formatter.step({
  "name": "verify that \"SHOPPING-CART SUMMARY\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "the user clicks on proceed to checkout button on shopping-cart summary",
  "keyword": "When "
});
formatter.step({
  "name": "verify that sign-in button is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "quantity",
        "size",
        "color"
      ]
    },
    {
      "cells": [
        "1",
        "S",
        "Black"
      ]
    },
    {
      "cells": [
        "2",
        "M",
        "Orange"
      ]
    },
    {
      "cells": [
        "3",
        "L",
        "Blue"
      ]
    },
    {
      "cells": [
        "4",
        "L",
        "Yellow"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_navigates_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify an item can be added to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user hover over DRESSES and clicks on SUMMER DRESSES",
  "keyword": "When "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_hover_over_DRESSES_and_clicks_on_SUMMER_DRESSES()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the image of the dress",
  "keyword": "And "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.clicksOnTheImageOfTheDress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects \"1\", \"S\" and \"Black\" of the dress",
  "keyword": "And "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.selectsAndOfTheDress(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adds one of the SUMMER DRESSES to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.adds_one_of_the_SUMMER_DRESSES_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify successfully added message appeared in the pop-up window",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.verify_successfully_added_message_appeared_in_the_pop_up_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on proceed to checkout button in the pop-up window",
  "keyword": "When "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_clicks_on_proceed_to_checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"SHOPPING-CART SUMMARY\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.verify_that_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on proceed to checkout button on shopping-cart summary",
  "keyword": "When "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_clicks_on_proceed_to_checkout_button_on_shopping_cart_summary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that sign-in button is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.verify_that_sign_in_button_is_diplayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#SubmitLogi\"}\n  (Session info: chrome\u003d97.0.4692.71)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Nuriyes-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:4a:8004:d4cf:3dc8%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: /var/folders/cz/bnwbjcfx3sd...}, goog:chromeOptions: {debuggerAddress: localhost:53264}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: deae4a0e43f47138cbb8bbb935128817\n*** Element info: {Using\u003did, value\u003dSubmitLogi}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\n\tat com.Elsevier.step_definitions.SummerDressStepDefs.verify_that_sign_in_button_is_diplayed(SummerDressStepDefs.java:77)\n\tat ✽.verify that sign-in button is displayed(file:///Users/nuriyeuzkut/IdeaProjects/Elsevier%20Task/src/test/resources/features/SummerDress.feature:17)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_navigates_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify an item can be added to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user hover over DRESSES and clicks on SUMMER DRESSES",
  "keyword": "When "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_hover_over_DRESSES_and_clicks_on_SUMMER_DRESSES()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the image of the dress",
  "keyword": "And "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.clicksOnTheImageOfTheDress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects \"2\", \"M\" and \"Orange\" of the dress",
  "keyword": "And "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.selectsAndOfTheDress(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adds one of the SUMMER DRESSES to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.adds_one_of_the_SUMMER_DRESSES_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify successfully added message appeared in the pop-up window",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.verify_successfully_added_message_appeared_in_the_pop_up_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on proceed to checkout button in the pop-up window",
  "keyword": "When "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_clicks_on_proceed_to_checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"SHOPPING-CART SUMMARY\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.verify_that_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on proceed to checkout button on shopping-cart summary",
  "keyword": "When "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_clicks_on_proceed_to_checkout_button_on_shopping_cart_summary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that sign-in button is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.verify_that_sign_in_button_is_diplayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#SubmitLogi\"}\n  (Session info: chrome\u003d97.0.4692.71)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Nuriyes-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:4a:8004:d4cf:3dc8%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: /var/folders/cz/bnwbjcfx3sd...}, goog:chromeOptions: {debuggerAddress: localhost:53431}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0d3c28bf725d030451cc8490f28c64dd\n*** Element info: {Using\u003did, value\u003dSubmitLogi}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\n\tat com.Elsevier.step_definitions.SummerDressStepDefs.verify_that_sign_in_button_is_diplayed(SummerDressStepDefs.java:77)\n\tat ✽.verify that sign-in button is displayed(file:///Users/nuriyeuzkut/IdeaProjects/Elsevier%20Task/src/test/resources/features/SummerDress.feature:17)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_navigates_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify an item can be added to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user hover over DRESSES and clicks on SUMMER DRESSES",
  "keyword": "When "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_hover_over_DRESSES_and_clicks_on_SUMMER_DRESSES()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the image of the dress",
  "keyword": "And "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.clicksOnTheImageOfTheDress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects \"3\", \"L\" and \"Blue\" of the dress",
  "keyword": "And "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.selectsAndOfTheDress(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adds one of the SUMMER DRESSES to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.adds_one_of_the_SUMMER_DRESSES_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify successfully added message appeared in the pop-up window",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.verify_successfully_added_message_appeared_in_the_pop_up_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on proceed to checkout button in the pop-up window",
  "keyword": "When "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_clicks_on_proceed_to_checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"SHOPPING-CART SUMMARY\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.verify_that_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on proceed to checkout button on shopping-cart summary",
  "keyword": "When "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_clicks_on_proceed_to_checkout_button_on_shopping_cart_summary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that sign-in button is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.verify_that_sign_in_button_is_diplayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#SubmitLogi\"}\n  (Session info: chrome\u003d97.0.4692.71)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Nuriyes-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:4a:8004:d4cf:3dc8%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: /var/folders/cz/bnwbjcfx3sd...}, goog:chromeOptions: {debuggerAddress: localhost:53578}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1a6331d5976075adf80b55d199270c93\n*** Element info: {Using\u003did, value\u003dSubmitLogi}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\n\tat com.Elsevier.step_definitions.SummerDressStepDefs.verify_that_sign_in_button_is_diplayed(SummerDressStepDefs.java:77)\n\tat ✽.verify that sign-in button is displayed(file:///Users/nuriyeuzkut/IdeaProjects/Elsevier%20Task/src/test/resources/features/SummerDress.feature:17)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_navigates_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify an item can be added to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user hover over DRESSES and clicks on SUMMER DRESSES",
  "keyword": "When "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_hover_over_DRESSES_and_clicks_on_SUMMER_DRESSES()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the image of the dress",
  "keyword": "And "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.clicksOnTheImageOfTheDress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects \"4\", \"L\" and \"Yellow\" of the dress",
  "keyword": "And "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.selectsAndOfTheDress(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adds one of the SUMMER DRESSES to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.adds_one_of_the_SUMMER_DRESSES_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify successfully added message appeared in the pop-up window",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.verify_successfully_added_message_appeared_in_the_pop_up_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on proceed to checkout button in the pop-up window",
  "keyword": "When "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_clicks_on_proceed_to_checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"SHOPPING-CART SUMMARY\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.verify_that_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on proceed to checkout button on shopping-cart summary",
  "keyword": "When "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.the_user_clicks_on_proceed_to_checkout_button_on_shopping_cart_summary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that sign-in button is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Elsevier.step_definitions.SummerDressStepDefs.verify_that_sign_in_button_is_diplayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#SubmitLogi\"}\n  (Session info: chrome\u003d97.0.4692.71)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Nuriyes-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:4a:8004:d4cf:3dc8%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: /var/folders/cz/bnwbjcfx3sd...}, goog:chromeOptions: {debuggerAddress: localhost:53730}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 17ab8f66c195162dfe34c457360608d1\n*** Element info: {Using\u003did, value\u003dSubmitLogi}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\n\tat com.Elsevier.step_definitions.SummerDressStepDefs.verify_that_sign_in_button_is_diplayed(SummerDressStepDefs.java:77)\n\tat ✽.verify that sign-in button is displayed(file:///Users/nuriyeuzkut/IdeaProjects/Elsevier%20Task/src/test/resources/features/SummerDress.feature:17)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", "screenshot");
formatter.after({
  "status": "passed"
});
});