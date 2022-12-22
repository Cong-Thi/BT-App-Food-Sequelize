const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const User = require("./User");
const Food = require("./Food")

const Orders = sequelize.define("Orders", {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
    },
    foodId: {
        type: DataTypes.INTEGER,
        field: "food_id",
    },
    foodAmount: {
        type: DataTypes.INTEGER,
        field: "amount",
    },
    code: {
        type: DataTypes.STRING,
    },
    arrSubId: {
        type: DataTypes.STRING,
        field: "arr_sub_id",
    },
}, {
    tableName: "orders",
    timestamps: false,
    freezeTableName: true,
});

Orders.removeAttribute("id");

User.hasOne(Orders, {
    foreignKey: "user_id",
})

Food.hasOne(Orders, {
    foreignKey: "food_id",
})

module.exports = Orders;