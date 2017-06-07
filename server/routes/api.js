module.exports = function(app){
    let auth = require('../Controller/auth');

    app.route('/user')
        .get(auth.add_user);
};
