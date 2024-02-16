class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
        await this.page.fill('input[name="email"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
    }

    async assertLoginSuccessful() {
        await this.page.waitForNavigation();
        const loggedInElement = await this.page.$('.logged-in-element');
        expect(loggedInElement).not.toBeNull();
    }
}

module.exports = LoginPage;