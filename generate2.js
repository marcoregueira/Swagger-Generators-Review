//Este módulo usa swagger-ts-generator
//No genera un api, genera reactive forms

const { generateTSFiles } = require("swagger-ts-generator");
 
const config = {
  file: __dirname + "/swagger/swagger.json"
};
 
generateTSFiles(
  config.file, // This can be either a file containing the Swagger json or the Swagger object itself
  {
    modelFolder: "./clients/swagger-ts-generator/",
    enumTSFile: "./clients/swagger-ts-generator/enums.ts"
    // + optionally more configuration
  }
);


