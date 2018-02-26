'use strict';

require('../../../nightwatch.conf.js');

module.exports = {
  'Login Page Initial Render': function LoginPageInitialRender(browser) {
    browser.url('https://10.6.128.191/login').waitForElementVisible('body', 1000).assert.title('Endgame').waitForElementVisible('div.login-wrapper', 1000).waitForElementVisible('div.endgame-logo', 1000).waitForElementVisible('input[name="endgameUsername"]', 1000).waitForElementVisible('input[name="endgamePassword"]', 1000).waitForElementVisible('div.links', 1000).waitForElementVisible('div.copyright', 1000).waitForElementVisible('button[type=submit]', 1000);
  }
};