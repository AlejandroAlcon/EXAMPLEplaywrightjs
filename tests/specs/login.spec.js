const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Login exitoso', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://todo.ly/');
    
    await loginPage.login('mail@example.com', 'pass');

    await loginPage.assertLoginSuccessful();
});