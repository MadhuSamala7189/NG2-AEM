
* Run `npm install` inside the project web folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to transpile typescript files into javascript and bundle all the javascript files into one file and place it into the `etc/designs/ng2-aem/clientlib-site/js` folder for deployment.
* Run `npm run aemsync` to sync the generated javascript files to Running AEM Instance.
* Run `npm run watch` to watch the for the changes in typescript files and then it will automatically transpiles the typescript code to javascript .
