const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const User = require("./User");
const Restaurant = require("./Restaurant")

const Rate = sequelize.define("Rate", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
    },
    resId: {
        type: DataTypes.INTEGER,
        field: "res_id",
    },
    rateAmount: {
        type: DataTypes.INTEGER,
        field: "amount",
    },
    dateRate: {
        type: DataTypes.DATE,
        field: "date_rate"
    },
}, {
    tableName: "rate_res",
    timestamps: false,
});

Rate.removeAttribute("id");

User.hasOne(Rate, {
    foreignKey: "user_id",
})

Restaurant.hasOne(Rate, {
    foreignKey: "res_id",
})

module.exports = Rate;