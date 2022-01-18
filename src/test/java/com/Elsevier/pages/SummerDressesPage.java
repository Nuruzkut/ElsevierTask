package com.Elsevier.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class SummerDressesPage extends BasePage {


    @FindBy(partialLinkText = "Printed Summer Dress")
    public WebElement summerDresses;


}
