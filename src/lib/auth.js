const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/users');

passport.use(new LocalStrategy({}, async (username, password, done) => {
    try {
        const user = UserModel.find(username);
        if (!user) {
            return done(null, false, {message: 'Invalid username'})
        }
        const passwordOk = user.comparePassword(password);
        if (!passwordOk) {
            return done(null, false, {message: 'Invalid password'}) 
        }
        return done(null, user);
    } catch (err) {
        return done (err);
    }
}));

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
    try {
        const user = UserModel.findById(id);
        if (!user) return done(null, null);
        return done(null, user);
    } catch (err) {
        return done(err);
    }
});

module.exports = {
    initialize: passport.initialize(),
    session: passport.session(),
    setUser: (req, res, next) => {
        res.locals.user = req.user;
        return next();
    }
};