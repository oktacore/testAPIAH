'use strict';

exports.action = {
  name:                   'mongoAction',
  description:            'mongoAction',
  blockedConnectionTypes: [],
  outputExample:          {},
  matchExtensionMimeType: false,
  version:                1.0,
  toDocument:             true,
  middleware:             [],

  inputs: {
      name: { required: true }

  },

  run: function(api, data, next) {
    let error = null;
    next(data.params.name);
  }
};
