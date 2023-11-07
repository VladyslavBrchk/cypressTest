class HomePage {

    elements = {
        homeBtn: () => cy.get('.nav-link[ui-sref="app.home"]'),
        signInBtn: () => cy.get('.nav-link[ui-sref="app.login"]'),
        signUpBtn: () => cy.get('.nav-link[ui-sref="app.register"]'),
        settingsBtn: () => cy.get('.nav-link[ui-sref="app.settings"]'),
        accountBtn: () => cy.get('.nav-link[ui-sref="app.profile.main({ username: $ctrl.currentUser.username })"]'),
        newArticleBtn: () => cy.get('.nav-link[ui-sref="app.editor"]'),
        userAccountName: () => cy.get(':nth-child(4) > .nav-link'),
        yourFeedBtn: () => cy.get('.feed-toggle :nth-child(1) > .nav-link'),
        globalFeedBtn: () => cy.get('.feed-toggle :nth-child(2) > .nav-link'),
        articleTitle: () => cy.get('[ng-bind="$ctrl.article.title"]')
    }

    navigate() {
        cy.visit('/');
    }

    clickOnSignIn() {
        this.elements.signInBtn().click();
    }

    clickOnSignUp() {
        this.elements.signUpBtn().click();
    }

    clickOnSettings() {
        this.elements.settingsBtn().click();
    }

    clickOnYourFeed() {
        this.elements.yourFeedBtn().click();
    }

    clickOnGlobalFeed() {
        this.elements.globalFeedBtn().click();
    }

    clickOnAccount() {
        this.elements.accountBtn().click();
    }

    clickOnNewArticle() {
        this.elements.newArticleBtn().click();
    }

    clickOnFeedItem(index) {
        this.elements.articleTitle().eq(index).click();
    }

    userAccountNameText() {
        this.elements.userAccountName().invoke('text');
    }
}

module.exports = new HomePage();