'use strict';
const { hashPassword } = require('../helpers/bcrypt.js');

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.Task);
        }
    }
    User.init(
        {
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: `Email cannot be empty`,
                    },
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: `Password cannot be empty`,
                    },
                },
            },
        },
        {
            sequelize,
            modelName: 'User',
        }
    ),
        User.addHook('beforeCreate', (usr, opt) => {
            usr.password = hashPassword(usr.password);
        });
    return User;
};
