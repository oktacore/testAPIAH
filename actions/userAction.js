'use strict';
var JSONAPISerializer = require('jsonapi-serializer').Serializer;

exports.addUser = {
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
      if(error){
        data.error = error;
        return next(error);
      }else{
        var NoteSerializer = new JSONAPISerializer('user', {
          id: '_id',
          attributes: ['first_name', 'last_name', 'password'],
          pluralizeType: false
        });
        var newNote = NoteSerializer.serialize(res);
        data.response = newNote;
        next(error);
      }
    });
  }
};
