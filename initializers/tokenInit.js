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
      },
      /*-----------------------------------------------*/
      validateToken: function(token, next){
        jwt.verify(token, api.config.general.TOKEN_SECRET, function(err, decoded) {      
          if(err)
            return next(err);

          if(decoded.exp <= moment().unix()){
            next(new Error('El token utilizado ha expirado'));
          }
          else{
            var _id = decoded.sub;
            if(_id !== 1)
              next(new Error('El token utilizado no es válido'));
            else
              next();
          }
        });
      }
      /*-----------------------------------------------*/
    }
    next();
  },
  start: function(api, next){
    next();
  },
  stop: function(api, next){
    next();
  }
};
