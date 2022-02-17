# Automation Project

* Language  : Javascript 

* Framework : TestCafe

-----------------------

* Before run the project :

   1) Download Node.js 
   2) inside Project Terminal run below :
 
          sudo su
          npm install 

    3) Download Java for Allure report   
    4) Create new file with name .env and add data as below:
    
           email=""<add registered email>
   
           password="" <add password for registered email>
   
           otrium_url="https://www.otrium.com/"
   
           accesskey="9ca1df2d52bcab5998fc02b506fd1a90"
   
           APIUrl="http://api.weatherstack.com/"
          
                     
--------------------------                    
Technical Assignment 2:
------------------------
* To Run Otrium automation on run below command in Terminal according in which browser you need to test :

         Chrome  : npm run test:chrome 
         Firefox  : npm run test:firefox 
         Safari  : npm run test:safari 
         edge  : npm run test:edge 
  

--------------------------------                               
Technical Assignment 3:
------------------------
 * To Run API automation on run below command in Terminal :

         npm run test:api

------------------------------------------------
* To Generate Allure report run below command in Terminal:

       allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report

------------------------------------------------
* To Check HTML Report for execution open from below path :

       ../HTML-Reports/otrium.html

------------------------------------------------

* To Check Failure screenshots :

      ../artifacts/screenshots

------------------------------------------------
* To Check Video for execustion  :

      ../artifacts/videos
      
------------------------------------------------
Functional Assignment 1:
-------------------------
* Check BDD for new feature add Item to Faviourate in below:
 
     ../AddToFav.feature
