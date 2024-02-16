const { test, expect } = require('@playwright/test');
const RegisterPage = require('../pages/RegisterPage');

test('Registro exitoso', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    // Navegar a la página de registro
    await page.goto('https://todo.ly/');

    // Realizar el registro
    await registerPage.register('mail@example.com', 'pass');

    // Verificar que el registro se haya realizado exitosamente
    await registerPage.assertRegistrationSuccessful();
});