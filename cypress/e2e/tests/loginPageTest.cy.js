import HomePage from '../../pages/homePage';
import LoginPage from '../../pages/loginPage';
import { faker } from '@faker-js/faker';

const validData = require('../../fixtures/validData.json');
const validURL = require('../../fixtures/validURL.json');

const randomRegName = faker.internet.userName();
const randomRegPassword = faker.internet.password();
const randomRegEmail = faker.internet.email();
const randomLogPassword = faker.internet.password();
const randomLogEmail = faker.internet.email();

describe('Login Page Testing', () => {
  beforeEach(() => {
    HomePage.navigate();
  })

  it('Registration Test', () => {
    HomePage.clickOnSignUp();
    cy.url().should('eq', validURL.registerPageUrl);
    LoginPage.register(randomRegName, randomRegEmail, randomRegPassword);
    cy.url().should('eq', validURL.homePageUrl);
    HomePage.elements.userAccountName().should('include.text', randomRegName);
    HomePage.elements.settingsBtn().should('be.visible');
    HomePage.elements.newArticleBtn().should('be.visible');
  })

  it('Invalid Login Test', () => {
    HomePage.clickOnSignIn();
    cy.url().should('eq', validURL.loginPageUrl);
    LoginPage.login(randomLogEmail, randomLogPassword);
    cy.url().should('eq', validURL.loginPageUrl);
    LoginPage.elements.errorMsg().should('include.text', validData.invalidLoginMsg);
  })

  it('Valid Login Test', () => {
    HomePage.clickOnSignIn();
    cy.url().should('eq', validURL.loginPageUrl);
    LoginPage.login(validData.email, validData.password);
    cy.url().should('eq', validURL.homePageUrl);
    HomePage.elements.userAccountName().should('include.text', validData.username);
    HomePage.elements.settingsBtn().should('be.visible');
    HomePage.elements.newArticleBtn().should('be.visible');
  })
})