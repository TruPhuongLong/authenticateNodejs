import { User } from '../models/user';

module.exports = app => {

    //POST / signup:
    app.post('/singup', (req, res) => {
        const body = req.body;
        if (body.email && body.username && body.password && body.passwordConf) {
            let userdata = {
                email: body.email,
                username: body.username,
                password: body.password,
                passwordConf: body.passwordConf,
            }
            let newUser = new User(userdata);
            newUser.save()
                .then(user => {
                    const { email, username } = user;
                    res.send({ email, username });
                })
                .catch(error => {
                    res.status(400).send(error);
                })
        }
    })

    //GET / login:
    app.get('/login', (req, res) => {

    });

    // GET /logout
    app.get('/logout', function (req, res, next) {
        if (req.session) {
            // delete session object
            req.session.destroy(function (err) {
                if (err) {
                    return next(err);
                } else {
                    return res.redirect('/');
                }
            });
        }
    });
}