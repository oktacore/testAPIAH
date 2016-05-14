var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*if (mongoose.connection.readyState === 0) {
    mongoose.connect(require('./connection-string'));
}*/


var userSchema = new Schema({

    'first_name': {
        type: String
    },
    'last_name': {
        type: String
    },
    'password': {
        type: String
    },
    'createdAt': {
        type: Date,
        default: Date.now
    },
    'updatedAt': {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});
/*
userSchema.pre('update', function () {
    this.update({}, {
        $set: {
            updatedAt: Date.now()
        }
    });
});

userSchema.pre('findOneAndUpdate', function () {
    this.update({}, {
        $set: {
            updatedAt: Date.now()
        }
    });
});



module.exports = mongoose.model('User', userSchema);*/

userSchema.virtual('full_name').get(function () {
    return this.first_name + ' ' + this.last_name;
});

// Create the mongoose model
var _model = mongoose.model('User', userSchema);
var _findByEmail = function (email, success, fail) {
    _model.findOne({
        email: email
    }, function (e, result) {
        if (e) {
            fail(e);
        } else {
            success(result);
        }
    });
}

module.exports = {
    schema: userSchema,
    model: _model,
    findByEmail: _findByEmail
}
