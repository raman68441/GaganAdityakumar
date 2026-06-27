const {test,expect}=require('@playwright/test');

test('practicetest',async({page})=>{
page.goto("https://practicetestautomation.com/practice-test-login/");
await page.locator('input[name="username"]').fill("student");
await page.locator('input[name="password"]').fill("Password123");

await page.locator('button[id="submit"]').click();

//await page.locator('//span[text()="Home"]').click();
await page.getByText('Home').click();

const textmessage=await page.getByText('Hello').textContent();

console.log(textmessage);



});
