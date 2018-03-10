# ng-env-build
Maintain a single environment.ts file in the app and change the configuration in environment.ts with build parameters using yargs

1. Clone the repository and navigate to ng-env-build folder. Run npm install to install all dependencies.

2. The environment , domainUrl and isAdmin parameters are configurable. If the environment is development, the environment.ts file will not be updated.

3. Only a single environment.ts file is maintained and the same gets updated with build params.

## Example :
  
Pass params with yargs on npm run

* All users :
     npm run config -- --environment=prod --domainUrl=assets/_stub/allusers.data.json --isAdmin=false && ng serve 
* Non-Admin users :  
    npm run config -- --environment=prod --domainUrl=assets/_stub/user.data.json --isAdmin=false && ng serv
* Admin users :
    npm run config -- --environment=prod --domainUrl=assets/_stub/admin.data.json --isAdmin=true && ng serve    
* **For ng build in production :**  
    npm run config -- --environment=prod --domainUrl=assets/_stub/admin.data.json --isAdmin=true && ng build --target=production --    env=dev

 
