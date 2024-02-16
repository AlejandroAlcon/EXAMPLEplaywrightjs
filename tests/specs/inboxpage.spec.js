const { test, expect } = require('@playwright/test');
const InboxPage = require('../pages/InboxPage');

test('Assert de página de Inbox', async ({ page }) => {
    const inboxPage = new InboxPage(page);
    await page.goto('https://todo.ly/');
    await inboxPage.assertInboxPage();
    expect(await page.isVisible('.task-list')).toBeTruthy();
    expect(await page.isVisible('.add-task-button')).toBeTruthy();
});

test('Creación de tarea en Inbox', async ({ page }) => {
    const inboxPage = new InboxPage(page);
    await page.goto('https://todo.ly/');
    await inboxPage.assertInboxPage();
    await inboxPage.createTask('Nueva tarea en Inbox');
    expect(await page.isVisible('.task-item:has-text("Nueva tarea en Inbox")')).toBeTruthy(); 
});

test('Actualización de tarea en Inbox', async ({ page }) => {
    const inboxPage = new InboxPage(page);
    await page.goto('https://todo.ly/');
    await inboxPage.assertInboxPage();
    await inboxPage.updateTask('Tarea existente', 'Nueva descripción de tarea');
    expect(await page.isVisible('.task-item:has-text("Nueva descripción de tarea")')).toBeTruthy(); 
});

test('Eliminación de tarea en Inbox', async ({ page }) => {
    const inboxPage = new InboxPage(page);
    await page.goto('https://todo.ly/');
    await inboxPage.assertInboxPage();
    await inboxPage.deleteTask('Tarea a eliminar');
    expect(await page.isVisible('.task-item:has-text("Tarea a eliminar")')).not.toBeTruthy(); 
});

test('Logout', async ({ page }) => {
    const inboxPage = new InboxPage(page);
    await page.goto('https://todo.ly/');
    await inboxPage.assertInboxPage();
    await inboxPage.logout();
    expect(await page.isVisible('.login-form')).toBeTruthy(); 
});
