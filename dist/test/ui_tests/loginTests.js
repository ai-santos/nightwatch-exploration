'use strict';

require('../../../nightwatch.conf.js');

module.exports = {
  'Login Page Initial Render': function LoginPageInitialRender(browser) {
    browser.url('https://10.6.44.105') //decouple this into its own command from a utility file
    .waitForElementVisible('body', 1000).assert.title('Endgame').assert.containsText('div.endgame-logo', 'ENDGAME.').assert.elementPresent('input[name="endgameUsername"]').assert.elementPresent('input[name="endgamePassword"]').assert.elementPresent('div.footer').assert.containsText('div.links a span', 'About Endgame')
    // .assert.containsText('div.link', 'Contact Us') //find out how to see multiple items in an element
    .assert.containsText('div.copyright span', 'Copyright 2018 Endgame').assert.containsText('button[type=submit] span', 'Login').end();
  },
  'Login Takes Admin User To Dashboard': function LoginTakesAdminUserToDashboard(browser) {
    browser.setValue('input[name="endgameUsername"]', 'admin').setValue('input[name="endgamePassword"]', 'smp+3ndg@m3').click('button[type=submit').waitForElementVisible('span .tooltip-title', 1000).assert.containsText('span .tooltip-title', 'dashboard').end();
  }
};