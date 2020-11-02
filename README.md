# Protractor-Cucumber Setup Guide

 ## Features :
   - All scripts written with > Typescript & Cucumber.
   - Page Object design pattern implementation.
   - Extensive hooks implemented for BeforeFeature, AfterScenarios etc.
   - Screenshots on failure feature scenarios.
   - Used protractor-multiple-cucumber-html-reporter-plugin report plugin which will take multiple JSON files to create customize report.
   - Take screen shot if needed (if required you can pass from command line as screenshot = yes) for pass scenario with new date folder.
      
  ## Before Start :
 
   ### Pre-requisites:
     
      1.  NodeJS installed globally in the system. https://nodejs.org/en/download/ 
      2.  Chrome or Firefox browser installed.
      3.  Text Editor - WebStorm or any which support java script installed.
      4.  npm install
      5.  npm install protractor
      6.  npm install cucumber
      7.  npm install typescript
      8.  npm install protractor-multiple-cucumber-html-reporter-plugin
      9.  npm i webdriver-manager
      10. npm run webdriver-update
      11. Verify webdriver installed -  npm run webdriver-start
     
     
 ### Run Scripts:
   - Clone the repository into a folder
   
   - If you want to run your specific tag (script) you can run by using protractor command
        
         1. npm run build
         2. protractor typeScript/config/conf.js --cucumberOpts.tags="@tagnem”--params.environment=dev --browser='internet explorer'
       
   - Take screen shot for pass scenarios which will be stored in Report/Screenshots/(create folderfor current date)
          
          protractor typeScript/config/ubuntuConfig.js --cucumberOpts.tags="@name_of_your_tag" --params.screenshot=yes
       
 