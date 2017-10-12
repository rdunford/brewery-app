require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , passport = require('passport')
    , Auth0Strategy = require('passport-Auth0')
    , cors = require('cors')

// EXPRESS
const app = express();

// BODY PARSER
app.use(bodyParser.json());

// SESSION
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

// PASSPORT + PASSPORT.SESSION
app.use(passport.initialize());
app.use(passport.session());

// MASSIVE
massive(process.env.CONNECTION_STRING).then(db => {
    console.log('Database connected')
    app.set('db', db)
}).catch(err => console.log(err));

// AUTH0 STRATEGY 
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL

}, function (accesstoken, refreshtoken, extraParams, profile, done) {
    const db = app.get('db');

    // Database calls go here for logging in

    db.find_user([profile.identities[0].user_id]).then(dbUser => {
        // console.log(profile, 'This is the user profile')
        if (dbUser[0]) {
            done(null, dbUser[0].userid)
        } else {
            const user = profile._json;
            db.create_user([user.name, user.email, user.picture, user.identities[0].user_id])
                .then(user => {
                    done(null, user[0].user_id)
                });
        };
    });
    // done(null, profile);
}));

// AUTH0 ENDPOINTS
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard/',
    failureRedirect: '/auth'
}));

// Checks to see if the user is there
app.get('/auth/me', (req, res, next) => {
    if (!req.user) {
        return res.status(404).send('User not found.')
    }
    return res.status(200).send(req.user)
})

// User logs out, no longer on the session
app.get('/auth/logout', (req, res, next) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/home/')
})

// SERIAL-USER
passport.serializeUser(function (id, done) {
    done(null, id)
});

// DESERIALIZE-USER
passport.deserializeUser(function (id, done) {
    app.get('db').find_current_user([id])
        .then(user => {
            done(null, user[0])
        });
});

// NODEMON 
const PORT = 3005;
app.listen(PORT, () => console.log(`Pouring beers for all ${PORT} patrons.`))