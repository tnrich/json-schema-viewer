# json-schema-viewer
Welcome to Teselagen's JSON Schema Viewer! (All credit for the original functionality goes to https://github.com/tnrich/json-schema-viewer)

This site is used to host and view JSON Schemas for Teselagen's software.

Try it out today at: https://json-schema.app


JSON Schema is awesome. It lets you define and validate the schema for your JSON object and is used to define many many JSON structures. 
For example schemas, please see: https://www.schemastore.org/json/ 

However, as great as the format is, without familiarity, it is often very difficult to read JSON Schema and understand exactly what JSON 
is allowed by the schema. Well, fear not! JSON Schema Viewer to the rescue: just paste a link to your JSON Schema and it will be 
rendered beautifully, comprehensively and with examples describing the JSON you should expect at evely level of the hierarchy.

## Usage

To run this project locally:

1. Run `yarn` to install the dependencies.
2. In one terminal, run `yarn start` 
3. In another terminal, run `yarn http-serve`

Now open: http://localhost:8081 to see the site and develop it live.

## Deployment

Make sure you've run yarn start to get the built files. 
yarn start

commit your changes
then push to master 

This should update the gh pages site
