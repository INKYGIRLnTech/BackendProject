const {Sequelize} = require('sequelize');
const path = require('path');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'products.db'),
    logging: false
});

//Sync the database
sequelize.sync().then(() => {
    console.log('Database is synced');
});

module.exports = { sequelize };