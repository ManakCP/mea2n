import * as auth from '../Controller/auth';

export function init(app)  {
    app.route('/user')
        .get(auth.get_user)
        .post(auth.add_user);
};


