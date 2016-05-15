'use strict';
var jwt = require('jsonwebtoken');
var moment = require('moment');

module.exports = {
  loadPriority:  800,
  startPriority: 1000,
  stopPriority:  1000,
  initialize: function(api, next){
    api.middlewareInit = {};
    /*-----------------------------------------*/
    var midCheckToken = {
      name: 'midCheckToken',
      global: false,
      priority: 1000,
      preProcessor: function (data, next) {
        if(!data.params.token){
          next(new Error('Necesita un token para realizar su petición'));
          return;
        }
        var token = data.params.token;

        jwt.verify(token, api.config.general.TOKEN_SECRET, function(err, decoded) {
          if(err)
            next(err);

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
    }
    /*-----------------------------------------*/
    var middleware = {
      name: 'userId checker',
      global: false,
      priority: 1000,
      preProcessor: function (data, next) {
        if (data.params.password === '12345') {
          next(new Error('Debe colocar una password más seguro'));
        } else {
          next();
        }
      }
    }
    /*-----------------------------------------*/
    api.actions.addMiddleware(middleware);
    api.actions.addMiddleware(midCheckToken);
    next();
  },
  start: function(api, next){
    next();
  },
  stop: function(api, next){
    next();
  }
};
