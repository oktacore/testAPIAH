'use strict';
var fs = require('fs');

module.exports = {
  loadPriority:  900,
  startPriority: 1000,
  stopPriority:  1000,
  initialize: function(api, next){
    api.mongooseBase = require('mongoose');

    api.mongoose = {};
    api.mongoose.models = [];

    if(api.config.mongoose.debug)
      api.mongooseBase.set('debug', true);

    api.mongooseBase.connect(api.config.mongoose.connection_string);
    api.mongooseBase.connection.on('error', console.error.bind(console, 'mongoose error:'));

    next();
  },
  start: function(api, next){

    var files = fs.readdirSync(api.config.mongoose.model_path);
    files.forEach(function(file){
      var nameParts = file.split("/");
      var name = nameParts[(nameParts.length - 1)].split(".")[0];
      if(name.indexOf('-') > -1) {
        name = name.split("-")[1];
      }
      api.mongoose.models[name] = require('../'+api.config.mongoose.model_path + '/' + name);
    });

    next();
  },
  stop: function(api, next){
    api.mongooseBase.disconnect(next);
    api.mongoose = {};
    next();
  }
};
