rd clients /s
mkdir clients
mkdir clients\swagger-ts-generator
mkdir clients\swagger-typescript-codegen
mkdir clients\swagger-angular-generator

node generate.js > clients/swagger-typescript-codegen/client.js

node generate2.js

npm run generate