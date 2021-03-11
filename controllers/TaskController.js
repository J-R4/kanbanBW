const { User, Task } = require('../models/index.js');

class TaskController {
    static tasks = async (req, res, next) => {
        try {
            let task = await Task.findAll();
            if (!task) {
                throw {
                    status: 404,
                    message: `Not Found`,
                };
            }
            res.status(200).json({ task });
        } catch (err) {
            next(err);
        }
    };

    static postTask = async (req, res, next) => {
        try {
            let data = req.body;
            let obj = {
                title: data.title,
                category: data.category,
                UserId: req.currentUser.id,
            };
            let theData = await Task.create(obj);

            if (!theData) {
                throw {
                    status: 400,
                    message: `Bad Request`,
                };
            }

            res.status(201).json({ theData });
        } catch (err) {
            next(err);
        }
    };

    static getOne = async (req, res, next) => {
        try {
            let target = +req.params.id;
            let theTask = await Task.findByPk(target);

            if (!theTask) {
                throw {
                    status: 404,
                    message: `cannot find the id / task`,
                };
            }
            res.status(200).json({ theTask });
        } catch (err) {
            next(err);
        }
    };

    static put = async (req, res, next) => {
        try {
            let target = +req.params.id;
            let data = req.body;
            let obj = {
                title: data.title,
                category: data.category,
            };

            let task = await Task.findByPk(target);

            if (!task) {
                throw {
                    status: 404,
                    message: `data not found`,
                };
            }

            let update = await Task.update(obj, {
                where: { id: target },
                returning: true,
            });

            if (!update[0]) {
                throw {
                    status: 400,
                    message: `Error in validation`,
                };
            }
            res.status(200).json({ update });
        } catch (err) {
            next(err);
        }
    };

    static patch = async (req, res, next) => {
        try {
            let target = +req.params.id;
            let data = { category: req.body.category };
            let task = await Task.findByPk(target);

            if (!task) {
                throw {
                    status: 404,
                    message: `data not found`,
                };
            }

            let update = await Task.update(data, {
                where: {
                    id: target,
                },
                returning: true,
            });

            if (!update[0]) {
                throw {
                    status: 400,
                    message: `Error in validation`,
                };
            }

            res.status(200).json({ update });
        } catch (err) {
            next(err);
        }
    };

    static delete = async (req, res, next) => {
        try {
            let target = +req.params.id;

            let task = await Task.findByPk(target);

            if (!task) {
                throw {
                    status: 404,
                    message: `data not found`,
                };
            }

            let begone = await Task.destroy({
                where: {
                    id: target,
                },
            });
            res.status(200).json({ begone, message: `Tasks with id ${target} has been deleted` });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = TaskController;
