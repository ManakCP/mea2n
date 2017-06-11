'use strict';
const mongoose = require('mongoose');
let user = mongoose.model('Users');
const bcrypt = require('bcrypt');
const config = require('../../config');

exports.get_user = (req, res) => {
    console.log('get user');
}

exports.add_user = (req, res) => {
    let signUp_user = new user(req.body);
    signUp_user.dob = new Date(req.body.dob).toJSON();
    signUp_user.password = bcrypt.hashSync(req.body.password, config.saltRound);   

    signUp_user.save({
        name: signUp_user.name,
        password: signUp_user.password,
        email: signUp_user.email,
        dob: signUp_user.dob,
        age: signUp_user.age      
    }, function(err, response){
        if (err)
            res.send(err);
        res.json('User registered successfully!!');
    });
}
