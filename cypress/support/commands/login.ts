import { LoginPage } from "../../page-objects/login";

const login = (username: string, password: string) =>  {   
    const loginPage = new LoginPage()
    loginPage.getUserName().type(username);
    loginPage.getPassword().type(password);
    loginPage.getLoginBtn().click();
};

Cypress.Commands.add('login', login)
