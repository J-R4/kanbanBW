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
                    len: {
                        args: [1, 40],
                        message: `Title of your Task can only contain 1 - 40 words only`,
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
                        args: [['Backlog', 'Todo', 'Doing', 'Done']],
                        message: `The Category only can contain this type of category = Backlog, Todo, Doing, Done`,
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
