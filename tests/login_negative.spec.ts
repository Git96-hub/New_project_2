import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('verify invalid login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const login = new LoginPage(page);

    await login.login('wrong_user', 'wrong_password');

    await expect(page.locator('[data-test="error"]')).toBeVisible();

});