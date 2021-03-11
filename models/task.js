'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Task.belongsTo(models.User);
        }
    }
    Task.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: `Title cannot be empty`,
                    },
                },
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: `Category cannot be empty`,
                    },
                    isIn: {
                        args: [`Backlog`, `Todo`, `Done`, `Completed`],
                        message: `The input must be either Backlog, Todo, Done, or Completed`,
                    },
                },
            },
        },
        {
            sequelize,
            modelName: 'Task',
        }
    );
    return Task;
};
