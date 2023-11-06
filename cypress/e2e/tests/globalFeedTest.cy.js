import HomePage from '../../pages/homePage';
import LoginPage from '../../pages/loginPage';
import GlobalArticlePage from '../../pages/globalArticlePage';
import AccountPage from '../../pages/accountPage';
import { faker } from '@faker-js/faker';

const validData = require('../../fixtures/validData.json');

const randomComment = faker.hacker.phrase();

describe('Global Feed Testing', () => {
    beforeEach(() => {
        HomePage.navigate();
        HomePage.clickOnSignIn();
        LoginPage.login(validData.email, validData.password);
        HomePage.clickOnGlobalFeed();
    })

    it('Article Likes Amount Changing Testing', () => {
        let initialLikes;
        HomePage.clickOnFeedItem(0);
        GlobalArticlePage.favoriteBtnNum().then((currentLikes) => {
            initialLikes = parseInt(currentLikes, 10);
            cy.log(initialLikes);
        });
        GlobalArticlePage.clickLike();
        cy.wait(3000);
        GlobalArticlePage.favoriteBtnText().then((text) => {
            if (text.includes('Unfavorite Article')) {
                GlobalArticlePage.favoriteBtnNum().should((currentLikes) => {
                    const updatedLikes = parseInt(currentLikes, 10);
                    expect(updatedLikes).to.equal(initialLikes + 1);
                });
            }
            else {
                GlobalArticlePage.favoriteBtnNum().should((currentLikes) => {
                    const updatedLikes = parseInt(currentLikes, 10);
                    expect(updatedLikes).to.equal(initialLikes - 1);
                });
            }
        });
    })

    it('Adding To Favorites Testing', () => {
        let addingArticleUrl;
        let favoriteArticleUrl;
        HomePage.clickOnFeedItem(1);
        GlobalArticlePage.clickLike();
        cy.wait(3000);
        cy.url().then((url) => {
            addingArticleUrl = url;
        });
        GlobalArticlePage.favoriteBtnText().then((text) => {
            if (text.includes('Favorite Article')) {
                GlobalArticlePage.clickLike();
            }
        });
        HomePage.clickOnAccount();
        AccountPage.clickOnFavoriteArticles();
        AccountPage.favoriteArticlesAmount().then((index) => {
            AccountPage.clickOnFeedItem(index - 1);
            cy.wait(3000);
            cy.url().then((url) => {
                favoriteArticleUrl = url;
                expect(favoriteArticleUrl).to.equal(addingArticleUrl);
            });
        });
    })

    it('Article Comment Adding Testing', () => {
        HomePage.clickOnFeedItem(0);
        GlobalArticlePage.addComment(randomComment);
        GlobalArticlePage.commentText(0).then((text) => {
            expect(text).to.equal(randomComment);
        })
    })

    it('Article Comment Deleting Testing', () => {
        HomePage.clickOnFeedItem(0);
        GlobalArticlePage.deleteComment(0);
        cy.contains(randomComment).should('not.exist');
    })
})