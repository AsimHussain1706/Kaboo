'use strict';

var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(cls) !== -1;
    });
};


describe('Kaboo registration page', function() {
  it('should have a registration form', function() {
    //navigate to login url
    browser.get('http://qatest.staging.kaboo.com/gb/login');
    //verify login form is present
    var forms = element.all(by.css('form[name="formLogin"]'));
    expect(forms.count()).toEqual(1);

    //Check that login button is  inactive
    var loginButton = element(by.css('button#submitLogin'));
    expect(hasClass(loginButton, 'is-inactive')).toBe(true);

    //Enter credentials
    element(by.css('input[name="username"]')).sendKeys('autouk');
    element(by.css('input[name="password"]')).sendKeys('Autotest1');

    //Check that login button is now active
    expect(hasClass(loginButton, 'is-inactive')).toBe(false);
    //Click login button
    loginButton.click();

    expect(browser.getCurrentUrl()).toEqual('http://qatest.staging.kaboo.com/gb/profile');

  });
});
