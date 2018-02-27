'use strict';

require('../../../nightwatch.conf.js');

module.exports = {
  'Login Page Initial Render': function LoginPageInitialRender(browser) {
    browser.url('https://qa-smp.qa.eginternal.com') //decouple this into its own command from a utility file
    .assert.urlContains('login').waitForElementVisible('body', 1000).assert.title('Endgame').assert.containsText('div.endgame-logo', 'ENDGAME.').assert.elementPresent('input[name="endgameUsername"]').assert.elementPresent('input[name="endgamePassword"]').assert.elementPresent('div.footer').assert.containsText('div.links a span', 'About Endgame')
    // .assert.containsText('div.link', 'Contact Us') //find out how to see multiple items in an element
    .assert.containsText('div.copyright span', 'Copyright 2018 Endgame').assert.containsText('button[type=submit] span', 'Login');
  },

  'Login Takes Admin User To Dashboard': function LoginTakesAdminUserToDashboard(browser) {
    browser.setValue('input[name="endgameUsername"]', 'admin').setValue('input[name="endgamePassword"]', 'smp+3ndg@m3').click('button[type=submit]').pause(1000).url('https://qa-smp.qa.eginternal.com/dashboard').waitForElementVisible('body', 1000).assert.urlContains('dashboard');
  },

  'Dashboard Page Initial Render': function DashboardPageInitialRender(browser) {
    browser.assert.containsText('span.highlight', 'Super Admin').assert.elementPresent('a[title~=dashboard]').assert.elementPresent('a[title~=endpoints]').assert.elementPresent('a[title~=alerts]').assert.elementPresent('a[title~=investigations]').assert.elementPresent('a[title~=administration]');
  },

  'Dashboard Page Link - Endpoints Work': function DashboardPageLinkEndpointsWork(browser) {
    browser.click('a[title~=endpoints]').pause(1000).url('https://qa-smp.qa.eginternal.com/endpoints').waitForElementVisible('body', 1000).assert.urlEquals('https://qa-smp.qa.eginternal.com/endpoints');
  },

  'Dashboard Page Link - Alerts Work': function DashboardPageLinkAlertsWork(browser) {
    browser.click('a[title~=alerts]').pause(1000).url('https://qa-smp.qa.eginternal.com/alerts').waitForElementVisible('body', 1000).assert.urlEquals('https://qa-smp.qa.eginternal.com/alerts');
  },

  'Dashboard Page Link - Investigations Work': function DashboardPageLinkInvestigationsWork(browser) {
    browser.click('a[title~=investigations]').pause(1000).url('https://qa-smp.qa.eginternal.com/investigations').waitForElementVisible('body', 1000).assert.urlEquals('https://qa-smp.qa.eginternal.com/investigations');
  },

  'Dashboard Page Link - Administration Works': function DashboardPageLinkAdministrationWorks(browser) {
    browser.click('a[title~=administration]').pause(1000).url('https://qa-smp.qa.eginternal.com/admin/policies').waitForElementVisible('body', 1000).assert.urlEquals('https://qa-smp.qa.eginternal.com/admin/policies');
  }

};