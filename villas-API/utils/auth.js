const jwt = require('./jwt');
const { userModel, tokenBlacklistModel } = require('../models')

function auth() {
    return function (req, res, next) {
        // const token = req.cookies['auth-cookie'];
        const token = req.headers.authorization || '';

        // if (!token) {
        //     res.redirect('/');
        //     return;
        // }
        Promise.all([
            jwt.verifyToken(token),
            tokenBlacklistModel.findOne({ token })
        ]).then(([data, blackListToken]) => {
            if (blackListToken) {
                return Promise.reject(new Error('blacklisted token'))
            }
            userModel.findById(data.userId)
                .then(user => {
                    req.user = user;
                    next();
                })
        }).catch(err => {
            // if (!redirectUnauthenticated) {
            //     next();
            //     return;
            // }
            if ([
                'token expired',
                'blacklisted token',
                'jwt must be provided',
                'jwt malformed'
            ].includes(err.message)
            ) {
                // res.redirect('/user/login?error')
                console.log(err)
                return;
            }
            console.log(err)
        })
    }
}
module.exports = auth; 