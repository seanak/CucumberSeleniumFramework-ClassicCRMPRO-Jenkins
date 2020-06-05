package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;


public class LoginStepDefination {

	WebDriver driver;
	
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page(){ 
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://classic.crmpro.com/");
	
	}

	@When ("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM(){
		
		String lpTitle = driver.getTitle();
		System.out.println("Login Page Title is :- "+lpTitle);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", lpTitle);
		
	}
	
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username1, String password2) {
	    driver.findElement(By.name("username")).sendKeys(username1);
	    driver.findElement(By.name("password")).sendKeys(password2);
	    
	    

	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()  {
		WebElement login = driver.findElement(By.xpath("//*[@id='loginForm']/div/div/input"));
		JavascriptExecutor js = ( JavascriptExecutor)driver;
		js.executeScript("arguments [0].click();",login);
			
	}
			
	@Then("^user is on home page$")
	public void user_is_on_home_page() {
		String hpTitle = driver.getTitle();
		System.out.println("home page Title is :-"+ hpTitle);
		Assert.assertEquals("CRMPRO", hpTitle);
		
	}

	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.quit(); 
	    
	}


	
}
