const bcrypt = require('bcryptjs');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    "userName": { type: String, unique: true },
    "password": String,
    "email": String,
    "loginHistory": {
        "dateTime": Date,
        "userAgent": String
    }
})

let User; // to be defined on new connection (see initialize)

module.exports.initialize = function () {
    return new Promise(function (resolve, reject) {
        let db = mongoose.createConnection("mongodb://WVUONG3:!Mcycg212@ds241019.mlab.com:41019/a6");
        db.on('error', (err) => {
            reject(err); // reject the promise with the provided error
        });
        db.once('open', () => {
            User = db.model("users", userSchema);
            resolve();
        });
    });
};

module.exports.registerUser = function (userData) {
    return new Promise((resolve, reject) => {
        if (userData.password != userData.password2)
            reject("Passwords do not match");
        else {

            bcrypt.genSalt(10, function (err, salt) { // Generate a "salt" using 10 rounds
                bcrypt.hash(userData.password, salt, function (err, hash) { // encrypt the password: "myPassword123"
                    // TODO: Store the resulting "hash" value in the DB
                    if (err) {
                        reject("There was an error encrypting the password => " + err + " <=");
                    }
                    else {
                        userData.password = hash;
                        let newUser = new User(userData);
                        newUser.save((err) => {
                            if (err) {
                                if (err.code == "11000")
                                    reject("User Name already taken");
                                else if (err)
                                    reject("There was an error creating the user: => " + err + " <=");
                            }
                            else
                                resolve();
                        });

                    }
                });
            });
        }
    });
};

module.exports.checkUser = function (userData) {
    return new Promise((resolve, reject) => {
        User.find({ userName: userData.userName })
            .exec()
            .then((users) => {
                bcrypt.compare(userData.password, users[0].password).then((res) => {
                    // res === true if it matches and res === false if it does not match
                    if (res === true) {
                        resolve();
                    }
                    else if (res === false) {
                        reject("Incorrect Password for user: => " + userData.userName + " <=");
                    }
                });
            }).catch((err) => {
                reject("Unable to find user: => " + userData.userName + " <=");
            });
    });
};


