const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define(
        "Like", 
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
        dateLike: {
            type: DataTypes.DATE,
            field: "date_like",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
    }, {
        tableName: "like_res",
        timestamps: false,
    });
}

//Like.removeAttribute("id");

