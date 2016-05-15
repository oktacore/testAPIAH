'use strict';

exports.action = {
  name: 'addUser',
  description: 'addUser',
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  middleware: ['userId checker','midCheckToken'],

  inputs: {
    first_name: {
      required: true
    },
    last_name: {
      required: true
    },
    password: {
      required: true
    },
    token: {
      required: true
    }
  },

  run: function (api, data, next) {
    api.mongoInit.addUser(data.params, function (error, res) {
      data.response = res;
      next(error);
    });
  }
};
