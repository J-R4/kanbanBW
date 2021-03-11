var jwt = require('jsonwebtoken');

const generateToken = (data) => jwt.sign({ id: data.id, email: data.email }, process.env.JWT_SECRET);

const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = {
    generateToken,
    verifyToken,
};
