const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const User = require("./User");
const Restaurant = require("./Restaurant")

const Like = sequelize.define("Like", {
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
    dateLike: {
        type: DataTypes.DATE,
        field: "date_like"
    },
}, {
    tableName: "like_res",
    timestamps: false,
});

Like.removeAttribute("id");

User.hasOne(Like, {
    foreignKey: "user_id",
})

Restaurant.hasOne(Like, {
    foreignKey: "res_id",
})

module.exports = Like;