const keys = require('../config/keys');
const User = require('../models/User');

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt,
}

module.exports = passport => {
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            const user = User.findById({id: jwt_payload.userId }).select('email id');

            if (user) {
                done(null, user)
            } else {
                done(null, false);
            }
        } catch (e) {
            console.error(e);
            done(e, false)
        }
    }));
}