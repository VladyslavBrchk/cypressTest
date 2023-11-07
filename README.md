# cypressTest

This repo provides auto tests for [Conduit Website](https://demo.realworld.io/#/) <br />
The test cases you can find on my [Google Drive](https://docs.google.com/spreadsheets/d/1K_LBjGjR50wNN4ZKbYZsYJaJuls5KAxGQnrYtlCnApQ/edit?usp=sharing)

## Dependencies Installation
To use these tests you should download this repo and install some dependencies by Powershell

* To create package.json file
```
npm init -y
```
* To install PlayWright Framework
```
npm install cypress --save-dev      
```
* To install faker (random generator)
```
npm install @faker-js/faker --save-dev
```
## Test Launch
There are some commands to launch test

* To launch tests via Cypress Tools
  - Write command in Powershell Terminal
  ```
  npm run test
  ```
  - Choose "E2E Testing"
  - Choose Browser
  - Open Specs Menu
  - Run Test
It provides running tests, viewing runs, debugging etc
* To run tests via terminal
```
npm run cypress-report
```
It provides viewing the last run in terminal
## Viewing Previous Runs
* You can view previous runs on my [Cypress Cloud](https://cloud.cypress.io/invitation/f2759369-5fbb-4a8c-9a9d-84893284cf54)
* Workflow is set up so that the tests run every time someone pushes the repo an you can see the results on the Cupress Cloud

