'use strict';

module.exports = {
    loadPriority: 1000,
    startPriority: 1000,
    stopPriority: 1000,
    initialize: function (api, next) {
        api.mongoInit = {
            saveUser: function (params, next) {
                var User = require(api.config.mongoose.model_path + '/User');

                var person = new User({
                    first_name: params.first_name,
                    last_name: params.last_name,
                    password: params.password,
                    error: false
                });

                person.save(function (err, person, numAffecte) {
                    if (err)
                        next(err, null);

                    //console.log('*************************\n', numAffecte, '*************************\n');
                    next(err, person);
                });
            }
        };

        next();
    },
    start: function (api, next) {
        var mongoose = require('mongoose');
        mongoose.connect(api.config.mongoose.connection_string);

        var middleware = {
            name: 'userId checker',
            global: true,
            priority: 1000,
            preProcessor: function (data, next) {
                if (data.params.password === '12345') {
                    next(new Error('Debe colocar una password más seguro'));
                } else {
                    next();
                }
            }
        }

        api.actions.addMiddleware(middleware);

        next();
    },
    stop: function (api, next) {
        next();
    }
};
