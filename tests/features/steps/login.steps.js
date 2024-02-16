const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/LoginPage');

Given('I am on the login page', async () => {
    await LoginPage.open(); 
});

When('I enter my email and password', async () => {
    await LoginPage.enterCredentials('tu_correo@example.com', 'tu_contraseña');
});

When('I click the login button', async () => {
    await LoginPage.clickLoginButton(); 
});

Then('I should be redirected to the dashboard', async () => {
    expect(await LoginPage.isOnDashboard()).toBeTruthy(); 
});

Then('I should see an error message', async () => {
    expect(await LoginPage.hasErrorMessage()).toBeTruthy(); 
});
