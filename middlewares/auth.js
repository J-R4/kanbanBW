const { verifyToken } = require('../helpers/jwt');

const { User, Task } = require('../models');

const authenticate = async (req, res, next) => {
    try {
        if (req.headers.access_token === undefined) {
            throw {
                status: 401,
                message: `Unauthorized`,
            };
        }
        let token = verifyToken(req.headers.access_token);

        let user = await User.findOne({
            where: { id: token.id, email: token.email },
        });

        if (user) {
            req.currentUser = { id: user.id, email: user.email };
            next();
        } else {
            throw {
                status: 401,
                message: `Unauthorized`,
            };
        }
    } catch (err) {
        next(err);
    }
};

const authorize = async (req, res, next) => {
    try {
        let target = +req.params.id;

        let task = await Task.findByPk(target);

        if (task) {
            let validUserTask = task.UserId === req.currentUser.id;

            if (validUserTask) {
                next();
            } else {
                throw {
                    status: 401,
                    message: `unauthorized`,
                };
            }
        } else {
            throw {
                status: 401,
                message: `unauthorized`,
            };
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    authenticate,
    authorize,
};
