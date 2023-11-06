class LoginPage {


    elements = {
        usernameField: () => cy.get(':nth-child(1) > .form-control'),
        emailField: () => cy.get(':nth-child(2) > .form-control'),
        passwordField: () => cy.get(':nth-child(3) > .form-control'),
        loginBtn: () => cy.get('[type="submit"]'),
        errorMsg: () => cy.get('[ng-repeat="error in errors"]')
    }

    register(username, email, password) {
        this.elements.usernameField().type(username);
        this.elements.emailField().type(email);
        this.elements.passwordField().type(password);
        this.elements.loginBtn().click();
    }

    login(email, password) {
        this.elements.emailField().type(email);
        this.elements.passwordField().type(password);
        this.elements.loginBtn().click();
    }

}


module.exports = new LoginPage();

