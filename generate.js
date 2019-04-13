//Este módulo usa swagger-typescript-codegen
//Genera un api ligera (en conparación con swaggerhub)
//usa tipos en lugar de interfaces para los mensajes

var fs = require("fs");
var CodeGen = require("swagger-typescript-codegen").CodeGen;

var file = "swagger/swagger.json";
var swagger = JSON.parse(fs.readFileSync(file, "UTF-8"));
var tsSourceCode = CodeGen.getTypescriptCode({
  className: "Test",
  swagger: swagger,
  imports: ["../../typings/tsd.d.ts"]
});
console.log(tsSourceCode);