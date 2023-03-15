const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const {seedCarts, seedUsers} = require('./example-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedCarts();
  console.log('\n----- CARTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
