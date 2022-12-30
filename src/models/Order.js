const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define(
        "Order",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
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
                type: DataTypes.STRING(255),
            },
            arrSubId: {
                type: DataTypes.STRING(255),
                field: "arr_sub_id",
            },
        }, {
        tableName: "orders",
        timestamps: false,
        freezeTableName: true,
    });

}


