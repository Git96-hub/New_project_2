import{ page } from '@playwright/test';
export class LoginPage {
    constructor(public page: page) { }
username = '#user-name';
password = '#password';
loginButton = '#login-button';

async login(user: string, pass: string) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginButton);
}
}