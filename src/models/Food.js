const {DataTypes} = require("sequelize");
const sequelize = require("./index");

const Food = sequelize.define("Food", {
    foodId : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "food_id",
    },
    foodName: {
        type: DataTypes.STRING,
        field: "food_name",
    },
    foodImage : {
        type: DataTypes.STRING,
        field: "image",
    },
    price: {
        type: DataTypes.FLOAT,
    },
    foodDes: {
        type: DataTypes.STRING,
        field: "des",
    },
    typeId: {
        type: DataTypes.INTEGER,
        field: "type_id",
    },
}, {
    tableName: "food",
    timestamps: false,
})

module.exports = Food;