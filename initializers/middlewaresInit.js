'use strict';

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
        var token = data.params.token;
        if(!token){
          return next(new Error('Necesita un token para realizar su petición'));
        }
        api.tokenInit.validateToken(token, function(error){
          next(error);
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
