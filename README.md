
## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

If you have a running AEM instance you can build and package the whole project and deploy into AEM with  

    mvn clean install -PautoInstallPackage
 
## Angular2 Application
    
This application is developed using AEM, sightly, Angular2, Typescript, RXJS , NPM (Node JS) , Webpack, Gulp.
 
Install Node JS (https://nodejs.org/en/) in local env to build the project.

Update the Uber jar dependency version in the main pom.xml to match with your local version.
 
Install CORS google chrome plugin to make the address autosuggestion work on Form component. 

Angular2 project code path : /NG2-AEM.ui.apps/src/main/web

To run below scripts manually go to /NG2-AEM.ui.apps/src/main/web
   
 Run `npm run build` to transpile typescript code into javascript and bundle all the javascript code into one file and place it into the `etc/designs/ng2-aem/clientlib-site/js` folder for deployment.
 
 Run `npm run aemsync` to sync the above generated javascript files `etc/designs/ng2-aem/clientlib-site/js` to Running AEM Instance.
 
 Run `npm run watch` to watch the for the changes in typescript files and then it will automatically transpiles the typescript code to javascript .
