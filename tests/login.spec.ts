import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('verify valid login', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    
    const login = new LoginPage(page);
    await  login.login('standard_user', 'secret_sauce');
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.waitForTimeout(5000);
}); 