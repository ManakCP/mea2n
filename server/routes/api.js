module.exports = function(app){
    let auth = require('../Controller/auth');

    app.route('/user')        
        .post(auth.add_user);

    app.route('/login')
        .post(auth.verify_user);
};
