const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Restaurant = sequelize.define("Restaurant", {
    resId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "res_id",
    },
    resName: {
        type: DataTypes.STRING,
        field: "res_name",
    },
    resImage: {
        type: DataTypes.STRING,
        field:"Image",
    },
    resDes: {
        type: DataTypes.STRING,
        field: "des",
    },
}, {
    tableName: "restaurant",
    timestamps: false,
});

module.exports = Restaurant;