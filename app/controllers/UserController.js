const User = require('../models/User.js');
const jwt = require('jwt-simple')

require('dotenv').config()

module.exports = app => {

    app.route('/users/:id').all(app.config.auth.authenticate())

    app.get("/users/:id", (req, res) => {
        User.findByPk(req.params.id)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    });

    app.post('/users', async (req, res) => {
        console.table(req.body);
        try {
            const newUser = User.build(req.body);

            if (newUser instanceof User)
                await newUser.save();

            return res.status(201).json(newUser);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    });

    app.post("/authorize", async (req, res) => {
        
        try {
            const user = await User.findOne({
                where: {
                    username: req.body.username,
                    password: req.body.password
                }
            })
            if (user) {
                const payload = user.id
                const token = jwt.encode(payload, process.env.JWT_SECRET);
                res.status(201).json({"token": token})
            } else {
                res.status(401).json("Não autorizado") 
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    })
}