exports.default = {
  mongoose: function(api){
    return {
      auto_start: true,
      connection_string: "mongodb://localhost:27017/CHAPLISTEST",
      debug: true,
      model_path: 'models'
    }
  }
}

exports.test = {
  mongoose: function(api){
    return {
      auto_start: false,
      connection_string: "mongodb://USER:PASSWORD@HOST:PORT/DATABASE",
      debug: false,
      model_path: api.project_root + '/models'
    }
  }
}

exports.production = {
  mongoose: function(api){
    return {
      auto_start: true,
      connection_string: "mongodb://USER:PASSWORD@HOST:PORT/DATABASE",
      debug: false,
      model_path: api.project_root + '/models'
    }
  }
}
