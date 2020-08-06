const jwt = require('jsonwebtoken');
const pass = '20doluGerb20';
const options = { expiresIn: '1d' };

function createToken(data) {
    return jwt.sign(data, pass, options)
}
function verifyToken(token) {
    return new Promise((resolve, reject) => {       //така се прави за да върне промис от стандартната функция
        jwt.verify(token, pass, (err, data) => {
            if (err) {
                reject(err); return;
            }
            resolve(data);
        })
    })
}
module.exports = { createToken, verifyToken }