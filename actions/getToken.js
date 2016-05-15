'use strict';

exports.getToken = {
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

exports.getToken2 = {
  name: 'getToken',
  description: 'getToken',
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 2.0,
  toDocument: true,
  middleware: [],

  inputs: {
  },

  run: function (api, data, next) {
    api.log('version2 del getToken');
    data.response = {data:'version2 del getToken'}
    next();
  }
};
