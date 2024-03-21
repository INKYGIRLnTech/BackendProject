const {products, users} = require('./seedData.js');
const {sequelize} = require('./db.js');
const { Product } = require('./models');


const seed = async () => {
    try{
        await sequelize.sync({ force: true });

        await Promise.all(products.map(product => Product.create(product)));
        await Promise.all(users.map(user => User.create(user)));


        console.log("db populated!");
    } catch(error) {
        console.error(error);
    }
};

seed();