const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define(
        "SubFood",
        {
            subId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: "sub_id",
            },
            subName: {
                type: DataTypes.STRING,
                field: "sub_name",
            },
            subPrice: {
                type: DataTypes.FLOAT,
                field: "sub_price",
            },
            foodId: {
                type: DataTypes.INTEGER,
                field: "food_id",
            },

        }, {
        tableName: "sub_food",
        timestamps: false,
    })
}

