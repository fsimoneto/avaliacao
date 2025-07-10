class LoginPage {
  get usernameInput() {
    return $('~test-Username')
  }

  get passwordInput() {
    return $('~test-Password')
  }

  get loginButton() {
    return $('~test-LOGIN')
  }

  async login(username, password) {
    await this.usernameInput.setValue(username)
    await this.passwordInput.setValue(password)
    await this.loginButton.click()
  }
}

module.exports = new LoginPage()
