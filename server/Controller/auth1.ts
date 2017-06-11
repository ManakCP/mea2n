import * as connector from 'mongoose';

export function get_user(req, res) {
    console.log('get user');
}

export function add_user(req, res) {
    console.log(req.body);
    res.send('User saved successfully');
}

