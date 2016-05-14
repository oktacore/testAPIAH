'use strict';

exports.action = {
    name: 'mongoAction',
    description: 'mongoAction',
    blockedConnectionTypes: [],
    outputExample: {},
    matchExtensionMimeType: false,
    version: 1.0,
    toDocument: true,
    middleware: ['userId checker'],

    inputs: {
        first_name: {
            required: true
        },
        last_name: {
            required: true
        },
        password: {
            required: true
        }
    },

    run: function (api, data, next) {
        //let error = null;
        api.mongoInit.saveUser(data.params, function (error, res) {
            data.response = res;
            next(error);
        });
    }
};
