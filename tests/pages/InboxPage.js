class InboxPage {
    constructor(page) {
        this.page = page;
    }

    async createTask(taskName) {
        await this.page.click('.add-task-button'); 
        await this.page.fill('.new-task-input', taskName); 
        await this.page.click('.save-task-button');
    }

    async updateTask(oldTaskName, newTaskName) {
        await this.page.click(`.task-item:has-text("${oldTaskName}")`); 
        await this.page.fill('.task-item input', newTaskName); 
        await this.page.click('.save-task-button'); 
    }

    async deleteTask(taskName) {
        await this.page.click(`.task-item:has-text("${taskName}") .delete-task-button`); 
    }

    async assertInboxPage() {
        const inboxTitle = await this.page.innerText('.inbox-title');
        expect(inboxTitle).toContain('Inbox'); 
    }

    async logout() {
        await this.page.click('.logout-button');
    }
}

module.exports = InboxPage;

