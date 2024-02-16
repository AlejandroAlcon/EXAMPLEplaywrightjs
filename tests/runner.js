const { test, expect } = require('@playwright/test');
const LoginPage = require('./pages/LoginPage');
const RegisterPage = require('./pages/RegisterPage');
const InboxPage = require('./pages/InboxPage');

test('Login exitoso', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://todo.ly/');
    await loginPage.login('mail@example.com', 'pass');
    await loginPage.assertLoginSuccessful();
});

test('Registro exitoso', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await page.goto('https://todo.ly/');
    await registerPage.register('mail@example.com', 'pass');
    await registerPage.assertRegistrationSuccessful();
});

test('Funcionalidad de Inbox', async ({ page }) => {
    const inboxPage = new InboxPage(page);

    await page.goto('https://todo.ly/');

    await inboxPage.assertInboxPage();

    await inboxPage.createTask('Nueva tarea en Inbox');
    await inboxPage.updateTask('Tarea existente', 'Nueva descripción de tarea');
    await inboxPage.deleteTask('Tarea a eliminar');

    await inboxPage.logout();
});
