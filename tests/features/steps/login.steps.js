const { Given } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/LoginPage');

Given('I am on the login page', async () => {
    await LoginPage.open(); // Método para abrir la página de inicio de sesión
});