class AccountPage {


    elements = {
        description: () => cy.get('[ng-bind="::$ctrl.profile.bio"]'),
        myArticlesBtn: () => cy.get('.articles-toggle > .nav > :nth-child(1) > .nav-link'),
        favoriteArticlesBtn: () => cy.get('.articles-toggle > .nav > :nth-child(2) > .nav-link')

    }

    clickOnMyArticles() {
        this.elements.myArticlesBtn().click();
    }

    clickOnFavoriteArticles() {
        this.elements.favoriteArticlesBtn().click();
    }

    clickOnFeedItem(index) {
        const feedItemTitles = cy.get('[ng-bind="$ctrl.article.title"]');
        feedItemTitles.eq(index).click();
    }
    
    favoriteArticlesAmount() {
        return cy.get('.article-preview>a').its('length');
    }

}


module.exports = new AccountPage();



