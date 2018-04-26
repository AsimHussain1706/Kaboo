'use strict';

var kPO = require('./KabooPageObject');

describe('Kaboo registration page', function() {
  it('should have a registration form', function() {

    kPO.navigateToURL('http://qatest.staging.kaboo.com/gb/signup');

    expect(kPO.isStepOneHidden()).toBe(false);
    expect(kPO.isStepTwoVisible()).toBe(false);
    expect(kPO.isNextButtonInactive()).toBe(true);

    kPO.setEmailAddress('asim' + parseInt(Math.random()*10000,10) + '@test.com');
    kPO.setRegistrationUsername('asim1234');
    kPO.setRegistrationPassword('Asimtest123');
    kPO.setRegistrationPasswordRepeat('Asimtest123');
    kPO.acceptTermsAndConditions();

    expect(kPO.isNextButtonInactive()).toBe(false);

    kPO.clickNextButton();

    expect(kPO.isStepOneHidden()).toBe(true);
    expect(kPO.isStepTwoVisible()).toBe(true);
    expect(kPO.isEnterYourDetailsButtonInactive()).toBe(true);
    expect(kPO.isEnterYourDetailsButtonDisabled()).toBe(true);

    kPO.setFirstName('Asim');
    kPO.setSurname('Hussain');
    kPO.setDayField('10');
    kPO.setMonthField('10');
    kPO.setYearField('1990');

    expect(kPO.getGenderValue()).toEqual('M');

    kPO.setAddressField('address');
    kPO.setPostcodeField('postcode');
    kPO.setCityField('city');

    expect(kPO.getCountryText()).toEqual('UNITED KINGDOM');
    expect(kPO.getCurrencyText()).toEqual('POUND STERLING');
    expect(kPO.getphonePrefix()).toEqual('+44');

    kPO.setPhoneNumber('789456123');

    expect(kPO.isEnterYourDetailsButtonInactive()).toBe(false);
    expect(kPO.isEnterYourDetailsButtonDisabled()).toBe(false);

    //clicking register now button
    kPO.clickRegisterNow();

  });
});
