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
        await inputField.waitForDisplayed(5000);
        await inputField.click();
        await inputField.setValue(keyword);
        await submitButton.waitForDisplayed(5000);
        await submitButton.click();
    }
}

module.exports = new Home();