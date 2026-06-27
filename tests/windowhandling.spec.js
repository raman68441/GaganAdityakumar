const { test, expect } = require('@playwright/test');

test('windowhandling', async ({ page }) => {

    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");

    console.log(await page.title());

    await page.locator('#name').fill("kahtikriraman");


    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.locator('#newWindowBtn').click()
        
    ]);

    await newPage.waitForLoadState();
await newPage.setViewportSize({
    width: 1920,
    height: 1080
});

await page.locator('#firstName').fill('kathrikirama');

    console.log("Child Title: " + await newPage.title());

});