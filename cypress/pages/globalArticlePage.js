class GlobalArticlePage {

    elements = {
        commentField: () => cy.get('.card-block>textarea'),
        favoriteBtn: () => cy.get('div[class="container"]>article-actions>article-meta>div>ng-transclude>span>favorite-btn[article="$ctrl.article"]'),
        postCommentBtn: () => cy.get('[type="submit"]'),
        postCommentText: () => cy.get('.card-text'),
        commentDeleteButton: () => cy.get('.mod-options')
    }

    clickLike() {
        this.elements.favoriteBtn().click();
    }

    favoriteBtnText() {
        return this.elements.favoriteBtn().invoke('text').then((text) => {
            return text;
        });
    }

    commentText(index) {
        return this.elements.postCommentText().eq(index).invoke('text').then((text) => {
            return text;
        });
    }

    favoriteBtnNum() {
        return this.elements.favoriteBtn().invoke('text').then((text) => {
            const matches = text.match(/\((\d+)\)/);
            return matches ? parseInt(matches[1], 10) : 0;
        });
    }

    addComment(comment){
        this.elements.commentField().type(comment);
        this.elements.postCommentBtn().click();
        cy.wait(3000);
    }

    deleteComment(index){
        this.elements.commentDeleteButton().eq(index).click();
    }
}

module.exports = new GlobalArticlePage();