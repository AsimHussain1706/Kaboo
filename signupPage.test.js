'use strict';

var kPO = require('./KabooPageObject');

describe('Kaboo signup page', function() {
  it('should have a working registration form', function() {
    //navigate to signup page
    kPO.navigateToURL('http://qatest.staging.kaboo.com/gb/signup');

    //Verify form step 1 to be visible and step 2 to be hidden
    expect(kPO.isStepOneHidden()).toBe(false);
    expect(kPO.isStepTwoVisible()).toBe(false);
    expect(kPO.isNextButtonInactive()).toBe(true);

    //Fill in the step 1 of the form with Valid values
    kPO.setEmailAddress('asim' + parseInt(Math.random()*10000,10) + '@test.com');
    kPO.setRegistrationUsername('asim1234');
    kPO.setRegistrationPassword('Asimtest123');
    kPO.acceptTermsAndConditions();

    //Verify Next button has become  active
    expect(kPO.isNextButtonInactive()).toBe(false);

    kPO.clickNextButton();

    // Verify form step 2 to be visible and step 1 to be hidden
    expect(kPO.isStepOneHidden()).toBe(true);
    expect(kPO.isStepTwoVisible()).toBe(true);

    //Verify the Enter your details button is inactive
    expect(kPO.isEnterYourDetailsButtonInactive()).toBe(true);
    expect(kPO.isEnterYourDetailsButtonDisabled()).toBe(true);

    //Fill in the step 2 of the form with Valid values
    kPO.setFirstName('Asim');
    kPO.setSurname('Hussain');
    kPO.setDayField('10');
    kPO.setMonthField('10');
    kPO.setYearField('1990');
    kPO.setAddressField('address');
    kPO.setPostcodeField('postcode');
    kPO.setCityField('city');
    kPO.setPhoneNumber('789456123');

    //Check that gender field for male is selected
    expect(kPO.getGenderValue()).toEqual('M');

    //Check that the country field is already filled in for UK
    expect(kPO.getCountryText()).toEqual('UNITED KINGDOM');
    //Check that the currency field is already filled in with Pound sterling
    expect(kPO.getCurrencyText()).toEqual('POUND STERLING');
    //Check that phone prefix field is already filled with the prefix for the UK
    expect(kPO.getphonePrefix()).toEqual('+44');

    //Verify the Enter your details button has become active
    expect(kPO.isEnterYourDetailsButtonInactive()).toBe(false);
    expect(kPO.isEnterYourDetailsButtonDisabled()).toBe(false);

    //clicking register now button
    kPO.clickRegisterNow();

  });
});
