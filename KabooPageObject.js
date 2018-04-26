'use strict';

var KabooPageObject = function () {


    //Registration elements to access

    //Reg forms
    var form = element(by.css('form[name="formSignup"]'));
    var step1 = form.element(by.css('div.m-auth-registration__form1'));
    var step2 = form.element(by.css('div.m-auth-registration__form2'));

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

    //dropdowns
    var country = step2.element(by.css('div#countrySelector'));
    var currency = step2.element(by.css('div#currencySelector'));
    var phonePrefix = step2.element(by.css('div#phonePrefix'));

    //buttons
    var nextButton = step1.element(by.css('button.m-auth-registration__button'));
    var acceptTermsTickBox = step1.element(by.css('label[for=termsAndConditions]'));
    var enterYourDetailsButton = step2.element(by.css('button.m-auth-registration__button--step2'));
    var genderRadio = step2.element(by.css('input[name="gender"]'));

    //login page elements

    //login forms
    var forms = element.all(by.css('form[name="formLogin"]'));

    //login fields
    var username = element(by.css('input[name="username"]'));
    var password = element(by.css('input[name="password"]'));

    //login buttons
    var loginButton = element(by.css('button#submitLogin'));

     var hasClass = function (element, cls) {
        return element && element.getAttribute('class').then(function (classes) {
            return classes.split(' ').indexOf(cls) !== -1;
        });
    };


    this.navigateToURL = function (url) {
        browser.get(url);
    };

    this.setRegistrationUsername = function (username) {
        regUsername.sendKeys(username);
    };

    this.setRegistrationPassword = function (pass) {
        regPassword.sendKeys(pass);
    };

    this.setRegistrationPasswordRepeat = function (pass) {
        regPasswordRepeat.sendKeys(pass);
    };

    this.setEmailAddress = function (pass) {
        emailAdd.sendKeys(pass);
    };

    this.setFirstName = function (pass) {
        firstName.sendKeys(pass);
    };

    this.setSurname = function (pass) {
        surname.sendKeys(pass);
    };

    this.setDayField = function (pass) {
        dayField.sendKeys(pass);
    };

    this.setMonthField = function (pass) {
        monthField.sendKeys(pass);
    };

    this.setYearField = function (pass) {
        yearField.sendKeys(pass);
    };

    this.setAddressField = function (pass) {
        addressField.sendKeys(pass);
    };

    this.setPostcodeField = function (pass) {
        postcodeField.sendKeys(pass);
    };

    this.setCityField = function (pass) {
        cityField.sendKeys(pass);
    };

    this.setPhoneNumber = function (pass) {
        phoneNumber.sendKeys(pass);
    };

    this.login = function () {
        loginButton.click();
    };

    this.acceptTermsAndConditions = function () {
        acceptTermsTickBox.click();
    };

    this.clickNextButton = function () {
        nextButton.click();
    };

    this.clickRegisterNow = function () {
        enterYourDetailsButton.click();
    };

    this.setUsername = function (user) {
      username.sendKeys(user);
    }

    this.setPassword = function (pass) {
      password.sendKeys(pass);
    }

    this.getCountryText = function() {
      return country.element(by.css('.c-dropdown__text')).getText();
    }

    this.getCurrencyText = function() {
      return currency.element(by.css('.c-dropdown__text')).getText();
    }

    this.getphonePrefix = function() {
      return phonePrefix.element(by.css('.c-dropdown__text')).getText();
    }

    this.login = function () {
        loginButton.click();
    };

    this.isNextButtonInactive = function () {
        return hasClass(nextButton, 'is-inactive');
    };

    this.isEnterYourDetailsButtonInactive = function () {
        return hasClass(enterYourDetailsButton, 'is-inactive');
    };

    this.isloginButtonInactive = function () {
        return hasClass(loginButton, 'is-inactive');
    };

    this.isEnterYourDetailsButtonDisabled = function () {
        return enterYourDetailsButton.getAttribute('disabled').then(function (disabled) {
            return disabled === 'true';
        });
    };

    this.getGenderValue = function () {
        return genderRadio.getAttribute('value').then(function (value) {
            return value;
        });
    };

    this.isStepOneHidden = function () {
        return hasClass(step1, 'is-hidden');
    };

    this.isStepTwoVisible = function () {
        return hasClass(step2, 'is-visible');
    };

};

module.exports = new KabooPageObject();
