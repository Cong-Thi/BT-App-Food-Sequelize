const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define(
        "FoodType", 
        {
        typeId : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "type_id",
        },
        typeName: {
            type: DataTypes.STRING,
            field: "type_name",
        },
    }, {
        tableName: "food_type",
        timestamps: false,
    })
}

