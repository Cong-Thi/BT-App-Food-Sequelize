// Setup Sequelize
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

// (async () => {
//     try {
//          await sequelize.authenticate();
//         console.log("Sequelize Connected");
//     } catch(error){
//         console.log("Sequelize Failed", error);
//         }
// })();

module.exports = sequelize;
