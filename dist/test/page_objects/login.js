'use strict';

module.exports = {
  url: function url() {
    return this.api.launchUrl;
  },
  elements: {
    username: {
      selector: 'input[name="endgameUsername"]'
    },
    password: {
      selector: 'input[name="endgamePassword"]'
    },
    submit: {
      selector: 'button[type=submit]'
    },
    error: {
      selector: '.error'
    }
  }
};