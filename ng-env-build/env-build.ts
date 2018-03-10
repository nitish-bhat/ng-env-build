import { writeFile } from 'fs';
import { argv } from 'yargs';

const domainUrl = argv.domainUrl;
const isAdmin = argv.isAdmin;

const targetPath = `./src/environments/environment.ts`;
const envFile = `
export const environment = {
    production: true,
    domain: {
      domainUrl: "${domainUrl}",
      isAdmin: ${isAdmin}
    }
  };
  `
// do not update the config if it is in dev mode
if (!argv.environment || argv.environment !== 'dev') {
    writeFile(targetPath, envFile, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Environment updated successfully")
        }
    });
}
else {
    console.log("Environment updation skipped")
}