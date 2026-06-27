const { test, expect } = require('@playwright/test');

test('Facebook Login', async ({ page }) => {

    await test.step('Open Facebook', async () => {

        await page.goto('https://www.facebook.com');

    });

    await test.step('Enter Email', async () => {

        await page.locator('[name="email"]').fill('your_email');

    });

    await test.step('Enter Password', async () => {

        await page.locator('[name="pass"]').fill('your_password');

    });

    await test.step('Click Login', async () => {

        await page.getByRole('button', { name: 'Log in' }).click();

    });

});