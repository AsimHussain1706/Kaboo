'use strict';

var kPO = require('./KabooPageObject');

describe('Kaboo login page', function() {
  it('should have a working login form', function() {
    //navigate to login url
    kPO.navigateToURL('http://qatest.staging.kaboo.com/gb/login');

    //Check that login button is  inactive
    expect(kPO.isloginButtonInactive()).toBe(true);

    //Enter credentials
    kPO.setUsername('autouk');
    kPO.setPassword('Autotest1');

    //Check that login button is now active
    expect(kPO.isloginButtonInactive()).toBe(false);
    //Click login button
    kPO.login();

    expect(browser.getCurrentUrl()).toEqual('http://qatest.staging.kaboo.com/gb/profile');

  });
});
