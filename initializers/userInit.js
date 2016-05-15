'use strict';

module.exports = {
  loadPriority: 1000,
  startPriority: 1000,
  stopPriority: 1000,
  initialize: function (api, next) {
    api.mongoInit = {
      /*-----------------------------------------------*/
      addUser: function addUser(params, next) {
        var User = api.mongoose.models.User;
        var person = new User({
          first_name: params.first_name,
          last_name: params.last_name,
          password: params.password
        });
        person.save(function (err, person, numAffecte) {
          if (err)
          next(err, null);
          next(err, person);
        });
      }
      /*-----------------------------------------------*/
    };
    next();
  },
  start: function (api, next) {
    next();
  },
  stop: function (api, next) {
    next();
  }
};
