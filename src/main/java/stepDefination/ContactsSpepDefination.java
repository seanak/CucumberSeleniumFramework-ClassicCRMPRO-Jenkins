package stepDefination;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class ContactsSpepDefination {
	WebDriver driver;
	
	@Given("^user is already on login page of CRM$")
	public void user_is_already_on_login_page_of_CRM()  {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://classic.crmpro.com/");
	    
	}

	@When("^title of the page is CRMPRO$")
	public void title_of_the_page_is_Free_CRMPRO() {
		String  lpTitle = driver.getTitle();
		System.out.println("contacts page title :- "+lpTitle);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", lpTitle);
	}
	
	@Then("^user entering \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username1, String password2){
		driver.findElement(By.name("username")).sendKeys(username1);
	    driver.findElement(By.name("password")).sendKeys(password2);
	}

	@Then("^user clicks on login button of CRMPRO$")
	public void user_clicks_on_login_button_of_CRMPRO()  {
		WebElement login = driver.findElement(By.xpath("//*[@id='loginForm']/div/div/input"));
		JavascriptExecutor js = ( JavascriptExecutor)driver;
		js.executeScript("arguments [0].click();",login);
		
	}
	
	@Then("^user is on home page of CRMPRO$")
	public void user_is_on_home_page_of_CRMPRO() {
		
		String hpTitle = driver.getTitle();
		System.out.println("home page Title is :-"+ hpTitle);
		Assert.assertEquals("CRMPRO", hpTitle);
		
	}

	@Then("^user moves to new contact page$")
	public void user_moves_to_new_contact_page() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		WebElement parentCon = driver.findElement(By.xpath("//*[@id='navmenu']/ul/li[4]/a"));
		action.moveToElement(parentCon).build().perform();
		driver.findElement(By.xpath("//li/a[@title='New Contact']")).click();
	   
	}
	
	@Then("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_and_and(String firstname, String lastname, String position) {
		driver.findElement(By.id("first_name")).sendKeys(firstname);
		driver.findElement(By.id("surname")).sendKeys(lastname);
		driver.findElement(By.id("company_position")).sendKeys(position);
		driver.findElement(By.xpath("//*[@id='contactForm']/table/tbody/tr[1]/td/input[2]")).click();
	}
	
	@Then("^Close the browser of contacts page$")
	public void close_the_browser_contacts_page() {
		driver.quit(); 
	    
	}


}
