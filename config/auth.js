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
        User.findOne({
            where: { username: payload.username }
        })
        .then(user => {
            console.log(user);
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        })
        .catch(error => done(error, null));
    })
    
    passport.use(strategy)

    return {
        initialize: () => {
            return passport.initialize()
        },
        authenticate: () => {
            return passport.authenticate("jwt", process.env.JWT_SESSION)
        }
    }
}