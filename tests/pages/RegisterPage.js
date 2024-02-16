class RegisterPage {
    constructor(page) {
        this.page = page;
    }

    async register(email, password) {
        await this.page.fill('input[name="email"]', email);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
    }

    async assertRegistrationSuccessful() {
        await this.page.waitForNavigation(); 
        const registrationSuccessMessage = await this.page.$('.registration-success-message'); 
        expect(registrationSuccessMessage).not.toBeNull(); 
    }
}

module.exports = RegisterPage;