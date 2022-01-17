
# ElsevierTask- Cucumber Framework
 - Using the testing site http://automationpractice.com/index.php automated tests are written to verify that summer dresses can be added to the cart and it is possible to proceed to the Sign in section.This project is for UI testing with Cucumber framework that runs automated tests written in behaviour driven development (BDD) style. Page Object Model has been implemented.

 1) Feature Files:

Feature files are used to write test automation steps. The steps are the application specification. 

2) Scenario:

A scenario represents a particular functionality which is under test. By seeing the scenario user should be able
 to understand the intent behind the scenario and what the test is all about. 
 Each scenario follows Gherkin language format. 

Feature: This gives information about the high level business functionality and the purpose of Application under test.

Given: As mentioned above, given specifies the pre-conditions. It is basically a known state.

When: This is used when some action is to be performed. As in above example we have seen when the user tries to log in using username and password, it becomes an action.

Then: The expected outcome or result should be placed here. For Instance: verify the login is successful, successful page navigation. Background: Whenever any step is required to perform in each scenario then those steps needs to be placed in Background. For Instance: If user needs to clear database before each scenario then those steps can be put in background.

And: And is used to combine two or more same type of action.


## Reporting

-Reports for each module are written into their respective /target directories.Tests result in a HTML report for each feature. In the case of test failures,
 a screen-shot of the UI at the point of failure is embedded into the report.

## Tools

 - Maven
 - Selenium WebDriver
 - Cucumber
