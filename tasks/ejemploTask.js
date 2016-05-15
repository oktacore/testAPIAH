'use strict';

exports.task = {
  name:          'ejemploTask',
  description:   'ejemploTask',
  frequency:     1000,
  queue:         'default',
  plugins:       [],
  pluginOptions: {},

  run: function(api, params, next){
    api.log("Hello!", "alert");
    next();
  }
};

exports.sayHello = {
  name:          'sayHello',
  description:   'I say hello',
  queue:         "default",
  plugins:       [],
  pluginOptions: [],
  frequency:     5 * 1000,
  run: function(api, params, next){
    api.log("hola mundo")
    next();
  }
};
