'use strict';

module.exports = {
  loadPriority:  1000,
  startPriority: 1000,
  stopPriority:  1000,
  initialize: function(api, next){
    api.mongoInit = {
        saveUser: function(params, next){
            console.log('*************************\n',params.first_name,'*************************\n');
            var user = {
                first_name: params.first_name,
                last_name: params.last_name,
                password: params.password,
                error: false
            }
            next(null, user);
        }
    };

    next();
  },
  start: function(api, next){
    next();
  },
  stop: function(api, next){
    next();
  }
};
