package com.Elsevier.pages;

import com.Elsevier.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public abstract class  BasePage {


    @FindBy(xpath = "(//a[@title='Dresses'])[2]")
    public WebElement dressesTab;

    @FindBy(xpath = "(//a[@title='Summer Dresses'])[2]")
    public WebElement summerDressesSubTab;






    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }













}
