class Home {
    get url() {
        return "/";
    }

    get inputField() {
        return $(".gLFyf.gsfi");
    }

    get submitButton() {
        return $(".aajZCb .gNO89b");
    }

    async search(keyword) {
        await this.inputField.waitForDisplayed(5000);
        await this.inputField.click();
        await this.inputField.setValue(keyword);
        await this.submitButton.waitForDisplayed(5000);
        await this.submitButton.click();
    }
}

module.exports = new Home();