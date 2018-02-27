require('../../../nightwatch.conf.js');

module.exports = {
  'Login Page Initial Render': function(browser) {
    browser
      .url('https://10.6.128.191')
      .waitForElementVisible('body', 1000)
      .assert.title('Endgame')
      .waitForElementVisible('div.login-wrapper', 1000)
      .waitForElementVisible('div.endgame-logo', 1000)
      .waitForElementVisible('input[name="endgameUsername"]', 1000)
      .assert.containsText('input[name="endgameUsername"]', '')
      .waitForElementVisible('input[name="endgamePassword"]', 1000)
      .waitForElementVisible('div.links', 1000)
      .waitForElementVisible('div.copyright', 1000)
      .waitForElementVisible('button[type=submit]', 1000)
      .setValue('name', 'endgameUsername', 'admin')
      .setValue('name', 'endgamePassword', 'smp+3ndg@m3')
      .click('button[type=submit]')
      .waitForElementVisible('div.dashboard-page', 1000)
      .assert.value('', 'Super Admin')
      // .end();
  }
};