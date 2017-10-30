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
        return res.status(200).send(false)
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

//PRODUCTS TABLE ENDPOINTS
app.get('/api/productInventory', (req, res, next) => {
    req.app.get('db').get_inventory()
        .then(inventory => {
            let correct = inventory.map(item => {
                //This needs to be converted to pennies to eliminate the
                //the need for the converation to number issue. pennies / 100
                item.price = Number(item.price);
                return item
            })
            // console.log(typeof correct[0].price)
            res.status(200).send(correct)
        }).catch(err => console.log(err));
});

app.get('/api/productInventory/:category', (req, res, next) => {
    // This console long is checking for what is being passing from the axios call
    // the category is part of the URL so it needs to be on params
    // console.log(req.params.category)
    req.app.get('db').get_inventory_by_category([req.params.category])
        .then(category => {
            res.status(200).send(category)
        }).catch(err => console.log(err));
});

// BEER TABLE ENDPOINT
app.get('/api/beerInventory', (req, res, next) =>{
    req.app.get('db').get_beers()
    .then(beers => {
        res.status(200).send(beers)
    }).catch(err => console.log(err));
});

// EVENTS TABLE ENDPOINT
app.get('/api/eventListings', (req, res, next) =>{
    req.app.get('db').get_events()
    .then(events => {
        res.status(200).send(events)
    }).catch(err => console.log(err));
});

// STRIPE ENPOINT
app.post('/api/payment', function (req, res, next) {
    //convert amount to pennies
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
        if (amountArray[i] === ".") {
            if (typeof amountArray[i + 1] === "string") {
                pennies.push(amountArray[i + 1]);
            } else {
                pennies.push("0");
            }
            if (typeof amountArray[i + 2] === "string") {
                pennies.push(amountArray[i + 2]);
            } else {
                pennies.push("0");
            }
            break;
        } else {
            pennies.push(amountArray[i])
        }
    }
    const convertedAmt = parseInt(pennies.join(''));

    const charge = stripe.charges.create({
        amount: convertedAmt, // amount in cents, again
        currency: 'usd',
        source: req.body.token.id,
        description: 'Test charge from react app'
    }, function (err, charge) {
        if (err) return res.sendStatus(500)
        return res.sendStatus(200);
        // if (err && err.type === 'StripeCardError') {
        //   // The card has been declined
        // }
    });
});




// NODEMON 
const PORT = 3005;
app.listen(PORT, () => console.log(`Pouring beers for all ${PORT} patrons.`))