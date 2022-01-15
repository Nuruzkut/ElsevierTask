package com.Elsevier.step_definitions;

import com.Elsevier.pages.AuthenticationPage;
import com.Elsevier.pages.PrintedSummaryPage;
import com.Elsevier.pages.ShoppingCartSummaryPage;
import com.Elsevier.pages.SummerDressesPage;
import com.Elsevier.utilities.BrowserUtils;
import com.Elsevier.utilities.ConfigurationReader;
import com.Elsevier.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class SummerDressStepDefs {

    PrintedSummaryPage printedSummaryPage = new PrintedSummaryPage();
    SummerDressesPage summerDressesPage= new SummerDressesPage();


    @Given("the user navigates to main page")
    public void the_user_navigates_to_main_page() {
        String url = ConfigurationReader.get("url");
        System.out.println("Navigating to " + url);
        Driver.get().get(url);
    }

    @When("the user hover over DRESSES and clicks on SUMMER DRESSES")
    public void the_user_hover_over_DRESSES_and_clicks_on_SUMMER_DRESSES() {
        Actions action = new Actions(Driver.get());
        SummerDressesPage summerDressesPage = new SummerDressesPage();
        BrowserUtils.waitForVisibility(summerDressesPage.dressesTab, 10);
        action.moveToElement(summerDressesPage.dressesTab).perform();
        summerDressesPage.summerDressesSubTab.click();
    }




    @When("adds one of the SUMMER DRESSES to the cart")
    public void adds_one_of_the_SUMMER_DRESSES_to_the_cart() {
        printedSummaryPage.addToCartButton.click();
        BrowserUtils.waitForVisibility(printedSummaryPage.successMessage, 10);


    }
    @Then("verify successfully added message appeared in the pop-up window")
    public void verify_successfully_added_message_appeared_in_the_pop_up_window() {
        Assert.assertTrue(printedSummaryPage.successMessage.isDisplayed());
    }
    @When("the user clicks on proceed to checkout button in the pop-up window")
    public void the_user_clicks_on_proceed_to_checkout_button() {
       printedSummaryPage.checkoutButton.click();


    }
    @Then("verify that {string} is displayed")
    public void verify_that_is_displayed(String expectedMessage) {
        WebElement actualMessage= Driver.get().findElement(By.id("cart_title"));
        //Assert.assertTrue(message.isDisplayed());
        Assert.assertTrue(actualMessage.getText().contains(expectedMessage));

    }
    @When("the user clicks on proceed to checkout button on shopping-cart summary")
    public void the_user_clicks_on_proceed_to_checkout_button_on_shopping_cart_summary() {
       ShoppingCartSummaryPage shoppingCartSummaryPage= new ShoppingCartSummaryPage();
       shoppingCartSummaryPage.SecondProceedButton.click();

    }
    @Then("verify that sign-in button is displayed")
    public void verify_that_sign_in_button_is_diplayed() {
        AuthenticationPage authenticationPage= new AuthenticationPage();
        Assert.assertTrue("Sign in button is not displayed", authenticationPage.signInButton.isDisplayed());
    }

    @And("clicks on the image of the dress")
    public void clicksOnTheImageOfTheDress() {
        summerDressesPage.summerDresses.click();


    }


    @And("selects {string}, {string} and {string} of the dress")
    public void selectsAndOfTheDress(String quantity, String size, String color) {

        printedSummaryPage.quantityBox.clear();
        printedSummaryPage.quantityBox.sendKeys(quantity);
        printedSummaryPage.selectSize(size);
        printedSummaryPage.selectColor(color);
        printedSummaryPage.addToCartButton.click();


    }
}