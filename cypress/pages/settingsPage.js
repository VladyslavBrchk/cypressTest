class SettingsPage {
    elements = {
        descriptionField: () => cy.get(':nth-child(3) > .form-control'),
        applyBtn: () => cy.get('[type="submit"]'),
        logoutBtn: () => cy.get('hr~button')
    }

    logout() {
        this.elements.logoutBtn().click();
    }

    changeDescription(description) {
        this.elements.descriptionField().clear();
        this.elements.descriptionField().type(description);
        this.elements.applyBtn().click();
    }
}

module.exports = new SettingsPage();

