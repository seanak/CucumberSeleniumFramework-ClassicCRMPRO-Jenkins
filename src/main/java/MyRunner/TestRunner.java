package MyRunner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(
		features = "C:\\Users\\seana\\New Workspace\\freecrmBDDFramework\\src\\main\\java\\features",
		glue={"stepDefination"},
		plugin={"pretty","html:test-output", "junit:junit_xml/cucumber.xml", "json:json_output/cucumber.json"},
		monochrome= true,
		dryRun= false,
		strict= true
		)

public class TestRunner {
		
		 
	

}
