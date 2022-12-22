const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const User = sequelize.define("User", {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "user_id",
    },
    userName: {
        type: DataTypes.STRING,
        field: "full_name",
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "user",
    timestamps: false,

    defaultScope: {
        attributes: {
            exclude: ["password"],
        },
    },

    hooks:{
        afterSave: (record) => {
            delete record.dataValues.password;
        },
    },
});

module.exports = User;