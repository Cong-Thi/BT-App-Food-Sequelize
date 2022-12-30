const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("bt_app_food", "root", "1234", {
    host: "localhost",
    port: 3306,
    dialect:"mysql",
});

sequelize
    .authenticate()
    .then(() => {
    console.log('Sequelize Connected');
    }).
    catch((error) => {
    console.log("Sequelize Failed", error);
    throw error;
    });

// Khởi tạo model
const Order = require("./Order")(sequelize)
const User = require("./User")(sequelize)
const Rate = require("./Rate")(sequelize)
const Restaurant = require("./Restaurant")(sequelize)
const SubFood = require("./SubFood")(sequelize)
const Food = require("./Food")(sequelize)
const Like = require("./Like")(sequelize)
Like.removeAttribute("id");
Rate.removeAttribute("id");
Order.removeAttribute("id");
const FoodType = require("./FoodType")(sequelize)

// Định nghĩa relationship giữa các model

// food 1 - n sub_food
SubFood.belongsTo(Food, {as: "food", foreignKey:"foodId"})
Food.hasMany(SubFood, { as: "subFood", foreignKey: "foodId"})

// food n - 1 food_type
Food.belongsTo(FoodType, { as: "foodType", foreignKey:"typeId"})
FoodType.hasMany(Food, { as: "food", foreignKey:"typeId"})

// user - order - food
User.belongsToMany(Food, {
    as: "orders",
    through: Order,
    foreignKey: "userId",
})
Food.belongsToMany(User, {
    as: "users",
    through: Order,
    foreignKey: "foodId",
})

// user - rate - restaurant
User.belongsToMany(Restaurant, {
    as: "restaurantRate",
    through: Rate,
    foreignKey: "userId",
})
Restaurant.belongsToMany(User, {
    as: "userRate",
    through: Rate,
    foreignKey: "resId",
})

// user - like - restaurant
User.belongsToMany(Restaurant, {
    as: "restaurantLike",
    through: Like,
    foreignKey: "userId",
})
Restaurant.belongsToMany(User, {
    as: "userLike",
    through: Like,
    foreignKey: "resId",
})
/////////-----/////////
 // User 1 - N Like
 User.hasMany(Like, {
    foreignKey: "userId",
    as: "likes",
 })

 // Like 1 - 1 User
 Like.belongsTo(User, {
    foreignKey: "userId",
    as: "user"
 })

 // User 1 - N Rate
 User.hasMany(Rate,{
    foreignKey:"userId",
    as: "rates",
 })

 // Rate 1 - 1 User
 Rate.belongsTo(User, {
    foreignKey:"userId",
    as: "user"
 })


 // Restaurant 1 - N Like
 Restaurant.hasMany(Like, {
    foreignKey: "resId",
    as: "likes"
 })

 // Like 1 - 1 Restaurant
 Like.belongsTo(Restaurant, {
    foreignKey:"resId",
    as: "restaurant",
 })

  // Restaurant 1 - N Rate
  Restaurant.hasMany(Rate, {
    foreignKey: "resId",
    as: "rates"
 })

 // Rate 1 - 1 Restaurant
 Rate.belongsTo(Restaurant, {
    foreignKey:"resId",
    as: "restaurant",
 })

module.exports = {
    sequelize,
    Order,
    User,
    Rate,
    Restaurant,
    SubFood,
    Food,
    Like,
    FoodType,
};
