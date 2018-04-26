'use strict';

var kPO = require('./KabooPageObject');

describe('Kaboo registration page', function() {
  it('should have a registration form', function() {
    //navigate to login url
    kPO.navigateToURL('http://qatest.staging.kaboo.com/gb/login');
    //verify login form is present
    var forms = element.all(by.css('form[name="formLogin"]'));
    expect(forms.count()).toEqual(1);

    //Check that login button is  inactive
    var loginButton = element(by.css('button#submitLogin'));
    expect(hasClass(loginButton, 'is-inactive')).toBe(true);

    //Enter credentials
    kpo.setUsername('autouk');
    kpo.setPassword('Autotest1');

    //Check that login button is now active
    expect(hasClass(kpo.loginButton, 'is-inactive')).toBe(false);
    //Click login button
    kpo.login();

    expect(browser.getCurrentUrl()).toEqual('http://qatest.staging.kaboo.com/gb/profile');

  });
});
