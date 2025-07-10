class CheckoutPage {
  get firstName() {
    return $('//android.widget.EditText[@content-desc="test-First Name"]')
  }

  get lastName() {
    return $('//android.widget.EditText[@content-desc="test-Last Name"]')
  }

  get zipCode() {
    return $('//android.widget.EditText[@content-desc="test-Zip/Postal Code"]')
  }

  get continueBtn() {
    return $('//android.widget.TextView[@text="CONTINUE"]')
  }

  async fillForm(first, last, zip) {
    await this.firstName.setValue(first)
    await this.lastName.setValue(last)
    await this.zipCode.setValue(zip)
    await this.continueBtn.click()
  }

  async validateOrder(expectedOverview, expectedItemTotal, expectedTotal) {
    const overviewText = await $('//android.widget.TextView[@text="' + expectedOverview + '"]');
    const itemTotal = await $('//android.widget.TextView[@text="' + expectedItemTotal + '"]');
    const total = await $('//android.widget.TextView[@text="' + expectedTotal + '"]');

    await expect(overviewText).toBeDisplayed();
    await expect(itemTotal).toBeDisplayed();
    await expect(total).toBeDisplayed();
  }
}

module.exports = new CheckoutPage()
