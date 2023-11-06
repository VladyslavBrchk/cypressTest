import HomePage from '../../pages/homePage';
import LoginPage from '../../pages/loginPage';
import MyArticlePage from '../../pages/myArticlePage';
import { faker } from '@faker-js/faker';


const validData = require('../../fixtures/validData.json');
const validURL = require('../../fixtures/validURL.json');


const randomTitle = faker.lorem.lines(1);
const randomAbout = faker.lorem.sentence();
const randomBody = faker.lorem.paragraph();
const randomText = faker.lorem.words();

describe('My Feed Testing', () => {
    beforeEach(() => {
        HomePage.navigate();
        HomePage.clickOnSignIn();
        LoginPage.login(validData.email, validData.password);
    })

    it('New Article Creation Testing', () => {
        HomePage.clickOnNewArticle();
        cy.url().should('eq', validURL.newArticlePageUrl);
        MyArticlePage.createArticle(randomTitle, randomAbout, randomBody, randomText);
        HomePage.clickOnAccount();
        MyArticlePage.articleTitleText(0).then((text) => {
            expect(text).to.equal(randomTitle);
        })
    })

    it('Article Deletion Test', () => {
        HomePage.clickOnAccount();
        cy.url().should('eq', validURL.accountPageUrl);
        MyArticlePage.clickOnFeedItem(0);
        MyArticlePage.clickOnDelete();
        cy.url().should('eq', validURL.homePageUrl);
        HomePage.clickOnAccount();
        cy.wait(2000);
        cy.contains(randomTitle).should('not.exist');
    })
})