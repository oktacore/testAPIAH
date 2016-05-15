'use strict';
var jwt = require('jsonwebtoken');
var moment = require('moment');
module.exports = {
  loadPriority:  1000,
  startPriority: 1000,
  stopPriority:  1000,
  initialize: function(api, next){
    api.tokenInit = {
      /*-----------------------------------------------*/
      generateToken: function(_id, next){
        var payload = {
          sub: _id,
          iat: moment().unix(),
          exp: moment().add(15, "days").unix(),
        };
        var tokenJWT = jwt.sign(payload, api.config.general.TOKEN_SECRET);
        next(null, tokenJWT);
      }
      /*-----------------------------------------------*/
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
