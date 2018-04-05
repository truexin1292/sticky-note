var express = require('express');
var router = express.Router();

var passport = require('passport');

var GitHubStrategy = require('passport-github').Strategy;

passport.serializeUser(function (user, done) {
    console.log('---serializeUser---')
    console.log(user)
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    console.log('---deserializeUser---')
    done(null, obj);
});

passport.use(new GitHubStrategy({//self
        clientID: 'eb8398ba9222613cb427',
        clientSecret: 'd11260941b31d8b571b7ddbcae83e3bad429b351',
        callbackURL: "http://www.truexinology.site/auth/github/callback"
    },
     (accessToken, refreshToken, profile, cb)=> {
        User.findOrCreate({ githubId: profile.id }, function (err, user) {
            console.log('log', profile);
            return cb(err, user);
        });
        cb(null, profile);
    }
));

// passport.use(new GitHubStrategy({//other
//         clientID: '464a82e317f2875fc602',
//         clientSecret: '068edebef15daf603a02ef4b07c51e2f8455ac8b',
//         callbackURL: "http://note.shenzekun.cn/auth/github/callback"
//     },
//     (accessToken, refreshToken, profile, cb) => {
//         // User.findOrCreate(
//         //     { githubId: profile.id },
//         //     (err, user) => {
//         //         return cb(err, user);
//         //     }
//         // );
//         cb(null, profile);
//     }
// ));

router.get('/github', passport.authenticate('github'));

router.get('/github/callback',
    passport.authenticate('github', {
        failureRedirect: '/login'
    }),
    (req, res) => {
        console.log('req', req);
        req.session.user = {
            id: req.user.id,
            username: req.user.displayName || req.user.username,
            avatar: req.user._json.avatar_url,
            provider: req.user.provider
        };
        console.log("success");
        // Successful authentication, redirect home.
        res.redirect('/');
    }
);

router.get('/logout',
    (req, res) => {
        req.session.destroy();
        res.redirect('/');
    }
)

module.exports = router;
