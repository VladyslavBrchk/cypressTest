import HomePage from '../../pages/homePage';
import LoginPage from '../../pages/loginPage';
import AccountPage from '../../pages/accountPage';
import SettingsPage from '../../pages/settingsPage';
import { faker } from '@faker-js/faker';

const validData = require('../../fixtures/validData.json');
const validURL = require('../../fixtures/validURL.json');

const randomDescription = faker.hacker.phrase();

describe('Settings Page Testing', () => {
    beforeEach(() => {
        HomePage.navigate();
        HomePage.clickOnSignIn();
        LoginPage.login(validData.email, validData.password);
    })

    it('Edit Description Test', () => {
        HomePage.clickOnSettings();
        cy.url().should('eq', validURL.settingsPageUrl);
        SettingsPage.changeDescription(randomDescription);
        cy.url().should('eq', validURL.accountPageUrl);
        AccountPage.elements.description().should('include.text', randomDescription);
    })

    it('Logout Test', () => {
        HomePage.clickOnSettings();
        cy.url().should('eq', validURL.settingsPageUrl);
        SettingsPage.logout();
        cy.url().should('eq', validURL.homePageUrl);
        HomePage.elements.signInBtn().should('be.visible');
        HomePage.elements.signUpBtn().should('be.visible');
    })
})
