class Login {
  get url() {
    return "?controller=authentication";
  }

  get emailInput() {
    return $("#email");
  }

  get passwordInput() {
    return $("#passwd");
  }

  get signInButton() {
    return $("#SubmitLogin");
  }

  get errorMessage() {
    return $(".alert.alert-danger > ol");
  }

  /**
   * Signs in
   *
   * @param {String} email - Email
   * @param {String} password - Button
   */
  async signIn(email, password) {
    console.log("SIGNIN EMAIL '" + email + "' PASS '" + password + "'");
    await this.emailInput.waitForDisplayed(5000);
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.signInButton.waitForDisplayed(5000);
    await this.signInButton.click();
  }
}

module.exports = new Login();
