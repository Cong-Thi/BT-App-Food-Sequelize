const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define(
        "Rate", 
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
        freezeTableName: true,
    });
}

