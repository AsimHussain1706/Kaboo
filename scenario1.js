'use strict';

var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(cls) !== -1;
    });
};


describe('Kaboo registration page', function() {
  it('should have a registration form', function() {
    browser.get('http://qatest.staging.kaboo.com/gb/signup');

    var forms = element.all(by.css('form[name="formSignup"]'));
    expect(forms.count()).toEqual(1);

    var form = forms.get(0);
    var step1 = form.element(by.css('div.m-auth-registration__form1'));

    expect(step1.element(by.css('div.m-auth-registration__form1.is-hidden'))).nothing();
    expect(step1.element(by.css('div.m-auth-registration__form2.is-visible'))).nothing();

    var nextButton = step1.element(by.css('button.m-auth-registration__button'));

    expect(hasClass(nextButton, 'is-inactive')).toBe(true);

    step1.element(by.css('input[name="email"]')).sendKeys('asim' + parseInt(Math.random()*10000,10) + '@test.com');

    step1.element(by.css('input[name="username"]')).sendKeys('asim1234');

    step1.element(by.css('input[name="password"]')).sendKeys('Asimtest123');

    step1.element(by.css('input[name="passwordRepeat"]')).sendKeys('Asimtest123');

    step1.element(by.css('label[for=termsAndConditions]')).click();

    expect(hasClass(nextButton, 'is-inactive')).toBe(false);

    nextButton.click();

    expect(hasClass(step1, 'is-hidden')).toBe(true);

    var step2 = form.element(by.css('div.m-auth-registration__form2'));

    expect(hasClass(step2, 'is-visible')).toBe(true);

    var enterYourDetailsButton = step2.element(by.css('button.m-auth-registration__button--step2'));

    expect(hasClass(enterYourDetailsButton, 'is-inactive')).toBe(true);
    expect(enterYourDetailsButton.getAttribute('disabled')).toEqual('true');

    step2.element(by.css('input[name="firstname"]')).sendKeys('Asim');

    step2.element(by.css('input[name="lastname"]')).sendKeys('Hussain');

    step2.element(by.css('input[name="days"]')).sendKeys('10');
    step2.element(by.css('input[name="months"]')).sendKeys('10');
    step2.element(by.css('input[name="years"]')).sendKeys('1990');

    expect(step2.element(by.css('input[name="gender"]')).getAttribute('value')).toEqual('M');

    step2.element(by.css('input[name="address"]')).sendKeys('address');

    step2.element(by.css('input[name="postalCode"]')).sendKeys('postcode');

    step2.element(by.css('input[name="city"]')).sendKeys('city');

    var country = step2.element(by.css('div#countrySelector'));
    expect(country.element(by.css('.c-dropdown__text')).getText()).toEqual('UNITED KINGDOM');

    var currency = step2.element(by.css('div#currencySelector'));
    expect(currency.element(by.css('.c-dropdown__text')).getText()).toEqual('POUND STERLING');

    var phonePrefix = step2.element(by.css('div#phonePrefix'));
    expect(phonePrefix.element(by.css('.c-dropdown__text')).getText()).toEqual('+44');

    step2.element(by.css('input[name="phoneNumber')).sendKeys('789456123');

    expect(hasClass(enterYourDetailsButton, 'is-inactive')).toBe(false);
    expect(enterYourDetailsButton.getAttribute('disabled')).toEqual(null);

    enterYourDetailsButton.click();


  });
});
