package stepDefinition;

import java.util.Map;

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

public class DealsMapStepDefination {
	/**
	 * @author seana
	 * In this class we used Map object with DataTable for parameterisation of test cases
	 * You can see entering login data and entering other data- methods using DataTable ref. dealsMap.feature
	 * @see #user_clicks_on_login_button_for_deals_map_test()
	 * @see #user_enters_deals_details_for_map(DataTable)
	 */
	
	WebDriver driver;
	
	@Given("^user is already on Login Page for deals map test$")
	public void user_is_already_on_Login_Page_for_deals_map_test() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://classic.crmpro.com/");   
	}

	@When("^title of login page is Free CRM for deals map test$")
	public void title_of_login_page_is_Free_CRM_for_deals_map_test() {
		String  lpTitle = driver.getTitle();
		System.out.println("contacts page title :- "+lpTitle);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", lpTitle);  
	}

	@Then("^user enters username and password for deals map test$")
	public void user_enters_username_and_password_for_deals_map_test(DataTable crdentials){
		for(Map<String, String> data: crdentials.asMaps(String.class, String.class)){
			
				driver.findElement(By.name("username")).sendKeys(data.get("username"));
			    driver.findElement(By.name("password")).sendKeys(data.get("password"));
		}
	}

	@Then("^user clicks on login button for deals map test$")
	public void user_clicks_on_login_button_for_deals_map_test() {
		WebElement login = driver.findElement(By.xpath("//*[@id='loginForm']/div/div/input"));
		JavascriptExecutor js = ( JavascriptExecutor)driver;
		js.executeScript("arguments [0].click();",login);	 
	}

	@Then("^user is on home page for deals map test$")
	public void user_is_on_home_page_for_deals_map_test(){
		String hpTitle = driver.getTitle();
		System.out.println("home page Title is :-"+ hpTitle);
		Assert.assertEquals("CRMPRO", hpTitle);
	   
	}

	@Then("^user moves to new deals map page$")
	public void user_moves_to_new_deals_map_page(){
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		WebElement parentCon = driver.findElement(By.xpath("//*[@id='navmenu']/ul/li[5]/a"));
		action.moveToElement(parentCon).build().perform();
		driver.findElement(By.xpath("//li/a[@title='New Deal']")).click(); 
	}

	@Then("^user enters deals details for map$")
	public void user_enters_deals_details_for_map(DataTable dealsData) {
		for(Map<String, String> data : dealsData.asMaps(String.class, String.class)){
			driver.findElement(By.id("title")).sendKeys(data.get("title"));
			driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
			driver.findElement(By.id("probability")).sendKeys(data.get("Probability"));
			driver.findElement(By.id("commission")).sendKeys(data.get("commision"));
			driver.findElement(By.xpath("//input[@value='Save and Create Another']")).click();
		}
	}

	@Then("^Close the browser of dealsMap page$")
	public void close_the_browser_of_dealsMap_page() {
		driver.quit();
	    
	}

}
