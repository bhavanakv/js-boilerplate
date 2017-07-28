// Generates mock data for local development

/* eslint no-console:0 */
import jsf from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, (er) => {
    if (er)
        return console.log(chalk.red(er));
    else
        return console.log(chalk.green("Mock data generated"));
});
