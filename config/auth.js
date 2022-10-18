const passport = require("passport")
const { ExtractJwt, Strategy } = require("passport-jwt")

const User = require('../app/models/User.js')

require('dotenv').config()

module.exports = _ => {

    const params = {
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }

    const strategy = new Strategy(params, (payload, done) => {
        User.findByPk(payload)
            .then(user => {
                if (user) {
                    return done(null, {
                        id: user.id,
                        email: user.email
                    });
                }
                return done(null, false);
            })
            .catch(error => done(error, null));
    })
    
    passport.use(strategy)

    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate("jwt", {session: false}),
    }
}