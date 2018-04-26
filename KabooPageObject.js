'use strict';

var KabooPageObject = function () {

    //Registration elements to access
    //Reg forms
    var signUpForm = element(by.css('form[name="formSignup"]'));
    var step1 = signUpForm.element(by.css('div.m-auth-registration__form1'));
    var step2 = signUpForm.element(by.css('div.m-auth-registration__form2'));

    //Registration fields
    var regUsername = step1.element(by.css('input[name="username"]'));
    var regPassword = step1.element(by.css('input[name="password"]'));
    var regPasswordRepeat = step1.element(by.css('input[name="passwordRepeat"]'));
    var emailAdd = step1.element(by.css('input[name="email"]'));
    var firstName = step2.element(by.css('input[name="firstname"]'));
    var surname = step2.element(by.css('input[name="lastname"]'));
    var dayField = step2.element(by.css('input[name="days"]'));
    var monthField = step2.element(by.css('input[name="months"]'));
    var yearField = step2.element(by.css('input[name="years"]'));
    var addressField = step2.element(by.css('input[name="address"]'));
    var postcodeField = step2.element(by.css('input[name="postalCode"]'));
    var cityField =  step2.element(by.css('input[name="city"]'));
    var phoneNumber = step2.element(by.css('input[name="phoneNumber'));

    //Dropdowns
    var country = step2.element(by.css('div#countrySelector'));
    var currency = step2.element(by.css('div#currencySelector'));
    var phonePrefix = step2.element(by.css('div#phonePrefix'));

    //Buttons
    var nextButton = step1.element(by.css('button.m-auth-registration__button'));
    var acceptTermsTickBox = step1.element(by.css('label[for=termsAndConditions]'));
    var enterYourDetailsButton = step2.element(by.css('button.m-auth-registration__button--step2'));
    var genderRadio = step2.element(by.css('input[name="gender"]'));

    //login page elements
    //login forms
    var loginForm = element(by.css('form[name="formLogin"]'));

    //login fields
    var username = element(by.css('input[name="username"]'));
    var password = element(by.css('input[name="password"]'));

    //login buttons
    var loginButton = element(by.css('button#submitLogin'));

    /**
     * Checks that an element has a class
     * @param {object} element the element to check
     * @param {string} cls the name of the class
     * @return {boolean} true if the element has the class , false otherwise
     */
     var hasClass = function (element, cls) {
        return element && element.getAttribute('class').then(function (classes) {
            return classes.split(' ').indexOf(cls) !== -1;
        });
    };

    /**
     * Navigates the browser window to specified url
     * @param {string} url the URL to navigate to
     */
    this.navigateToURL = function (url) {
        browser.get(url);
    };

    /**
     * Sets username on the registration form
     * @param {String} username the username
     */
    this.setRegistrationUsername = function (username) {
        regUsername.sendKeys(username);
    };

    /**
     * Sets password and password repeat on the registration form
     * @param {String} password the password
     * @param {String} repeatPassword the password to be used on the repeatPassword field.
     *                                Password will be used if no repeat password is specified.
     */
    this.setRegistrationPassword = function (password, repeatPassword) {
        regPassword.sendKeys(password);
        regPasswordRepeat.sendKeys(repeatPassword ? repeatPassword : password);
    };

    /**
     * Sets Email address on the registration form
     * @param {String} emailAddress the emailAddress
     */
    this.setEmailAddress = function (emailAddress) {
        emailAdd.sendKeys(emailAddress);
    };

    /**
     * Sets first name on the registration form
     * @param {String} fName the first name
     */
    this.setFirstName = function (fName) {
        firstName.sendKeys(fName);
    };

    /**
     * Sets surname on the registration form
     * @param {String} sName the surname
     */
    this.setSurname = function (sName) {
        surname.sendKeys(sName);
    };

    /**
     * Sets day in day field on the registration form
     * @param {String} dayField the day field
     */
    this.setDayField = function (day) {
        dayField.sendKeys(day);
    };

    /**
     * Sets month in month field on the registration form
     * @param {String} monthField the month Field
     */
    this.setMonthField = function (month) {
        monthField.sendKeys(month);
    };

    /**
     * Sets year in year field on the registration form
     * @param {String} yearField the year Field
     */
    this.setYearField = function (year) {
        yearField.sendKeys(year);
    };

    /**
     * Sets address on the registration form
     * @param {String} address the address Field
     */
    this.setAddressField = function (address) {
        addressField.sendKeys(address);
    };

    /**
     * Sets postcode on the registration form
     * @param {String} postcode the postcode Field
     */
    this.setPostcodeField = function (postcode) {
        postcodeField.sendKeys(postcode);
    };

    /**
     * Sets city on the registration form
     * @param {String} city the city Field
     */
    this.setCityField = function (city) {
        cityField.sendKeys(city);
    };

    /**
     * Sets phone on the registration form
     * @param {String} phone the phone Field
     */
    this.setPhoneNumber = function (phone) {
        phoneNumber.sendKeys(phone);
    };

    /**
     * Clicks login button on the registration form
     */
    this.login = function () {
        loginButton.click();
    };

    /**
     * Clicks accept terms and conditions tick box on the registration form
     */
    this.acceptTermsAndConditions = function () {
        acceptTermsTickBox.click();
    };

    /**
     * Clicks Next button on the registration form
     */
    this.clickNextButton = function () {
        nextButton.click();
    };

    /**
     * Clicks Register now button on the registration form
     */
    this.clickRegisterNow = function () {
        enterYourDetailsButton.click();
    };

    /**
     * Sets username on the login form
     * @param {String} user the username
     */
    this.setUsername = function (user) {
      username.sendKeys(user);
    }

    /**
     * Sets password on the login form
     * @param {String} pass the password
     */
    this.setPassword = function (pass) {
      password.sendKeys(pass);
    }

    /**
     * Verify text of country on the login form
     */
    this.getCountryText = function() {
      return country.element(by.css('.c-dropdown__text')).getText();
    }

    /**
     * Verify text of currency on the login form
     */
    this.getCurrencyText = function() {
      return currency.element(by.css('.c-dropdown__text')).getText();
    }

    /**
     * Verify phone prefix  on the login form
     */
    this.getphonePrefix = function() {
      return phonePrefix.element(by.css('.c-dropdown__text')).getText();
    }

    /**
     * Clicks Next button on the login form
     */
    this.login = function () {
        loginButton.click();
    };

    /**
     * @return {boolean} true if the element has the class , false otherwise
     */
    this.isNextButtonInactive = function () {
        return hasClass(nextButton, 'is-inactive');
    };

    /**
     * @return {boolean} true if the element has the class , false otherwise
     */
    this.isEnterYourDetailsButtonInactive = function () {
        return hasClass(enterYourDetailsButton, 'is-inactive');
    };

    /**
     * @return {boolean} true if the element has the class , false otherwise
     */
    this.isloginButtonInactive = function () {
        return hasClass(loginButton, 'is-inactive');
    };

    /**
     * @return {boolean} true if the element has the attribute , false otherwise
     */
    this.isEnterYourDetailsButtonDisabled = function () {
        return enterYourDetailsButton.getAttribute('disabled').then(function (disabled) {
            return disabled === 'true';
        });
    };

    /**
     * @return {boolean} true if the element has the value , false otherwise
     */
    this.getGenderValue = function () {
        return genderRadio.getAttribute('value').then(function (value) {
            return value;
        });
    };

    /**
     * @return {boolean} true if the element has the class , false otherwise
     */
    this.isStepOneHidden = function () {
        return hasClass(step1, 'is-hidden');
    };

    /**
     * @return {boolean} true if the element has the class , false otherwise
     */
    this.isStepTwoVisible = function () {
        return hasClass(step2, 'is-visible');
    };

};

module.exports = new KabooPageObject();
