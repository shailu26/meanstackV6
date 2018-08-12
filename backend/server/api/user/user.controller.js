import User from './user.model';

module.exports = {
    'newUser': (req, res) => {
        let data = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        };
        let newUser = new User(data);
        newUser.save((err, userInfo) => {
            if (err) {
                return res.json(err);
            } else {
                return res.json({'status': 200, 'userInfo': userInfo});
            }
        });
    }
}