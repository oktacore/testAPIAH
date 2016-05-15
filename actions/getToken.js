'use strict';

exports.action = {
  name: 'getToken',
  description: 'getToken',
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  middleware: [],

  inputs: {
  },

  run: function (api, data, next) {
    console.log(api.models);
    api.tokenInit.generateToken(1, function (error, res) {
      data.response = res;
      next(error);
    });
  }
};
