package stepDefinition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class DealsStepDefinition {
	/**
	 * @author seana
	 * In this class you can see entering login data and entering other data- methods using DataTable ref. deals.feature
	 * @see #user_enters_username_and_password_for_deals_test(DataTable)
	 * @see #user_enters_deals_details(DataTable)
	 */
	
	WebDriver driver;
	
	@Given("^user is already on Login Page for deals test$")
	public void user_is_already_on_Login_Page_for_deals_test(){
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://classic.crmpro.com/"); 
	}

	@When("^title of login page is Free CRM for deals test$")
	public void title_of_login_page_is_Free_CRM_for_deals_test() {
		String  lpTitle = driver.getTitle();
		System.out.println("contacts page title :- "+lpTitle);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", lpTitle);
	}

	@Then("^user enters username and password for deals test$")
	public void user_enters_username_and_password_for_deals_test(DataTable credentials)  {
		List<List<String>> data = credentials.raw();
		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
	    driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
	}

	@Then("^user clicks on login button for deals test$")
	public void user_clicks_on_login_button_for_deals_test() {
		WebElement login = driver.findElement(By.xpath("//*[@id='loginForm']/div/div/input"));
		JavascriptExecutor js = ( JavascriptExecutor)driver;
		js.executeScript("arguments [0].click();",login);	
	}

	@Then("^user is on home page for deals test$")
	public void user_is_on_home_page_for_deals_test() {
		String hpTitle = driver.getTitle();
		System.out.println("home page Title is :-"+ hpTitle);
		Assert.assertEquals("CRMPRO", hpTitle);
	}

	@Then("^user moves to new deals page$")
	public void user_moves_to_new_deals_page() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		WebElement parentCon = driver.findElement(By.xpath("//*[@id='navmenu']/ul/li[5]/a"));
		action.moveToElement(parentCon).build().perform();
		driver.findElement(By.xpath("//li/a[@title='New Deal']")).click();
	    
	   
	}

	@Then("^user enters deals details$")
	public void user_enters_deals_details(DataTable dealsData){
		List<List<String>> data = dealsData.raw();
		driver.findElement(By.id("title")).sendKeys(data.get(0).get(0));
		driver.findElement(By.id("amount")).sendKeys(data.get(0).get(1));
		driver.findElement(By.id("probability")).sendKeys(data.get(0).get(2));
		driver.findElement(By.id("commission")).sendKeys(data.get(0).get(3));
		driver.findElement(By.xpath("//*[@id='prospectForm']/table/tbody/tr[1]/td/input[1]")).click();
	}

	@Then("^Close the browser of deals page$")
	public void close_the_browser_of_deals_page() {
	    driver.quit();
	    
	}

}
