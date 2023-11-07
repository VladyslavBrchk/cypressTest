class MyArticlePage {

    elements = {
        titleField: () => cy.get(':nth-child(1) > .form-control'),
        aboutField: () => cy.get(':nth-child(2) > .form-control'),
        bodyField: () => cy.get(':nth-child(3) > .form-control'),
        tagsField: () => cy.get(':nth-child(4) > .form-control'),
        publishArticleBtn: () => cy.get('[type="button"]'),
        articleTitle: () => cy.get('[ng-bind="$ctrl.article.title"]'),
        deleteArticleBtn: () => cy.get('div[class="container"]>article-actions>article-meta>div>ng-transclude>span>[ng-click="$ctrl.deleteArticle()"]')
    }

    articleTitleText(index) {
        return this.elements.articleTitle().eq(index).invoke('text').then((text) => {
            return text;
        });
    }

    createArticle(title, about, body, tags) {
        this.elements.titleField().type(title);
        this.elements.aboutField().type(about);
        this.elements.bodyField().type(body);
        this.elements.tagsField().type(tags);
        this.elements.publishArticleBtn().click();
        cy.wait(3000);
    }

    clickOnFeedItem(index) {
        this.elements.articleTitle().eq(index).click();
    }

    clickOnDelete() {
        this.elements.deleteArticleBtn().click();
        cy.wait(2000);
    }
}

module.exports = new MyArticlePage();

