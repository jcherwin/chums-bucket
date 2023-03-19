const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const { Category, Product } = require('../models');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await Product.drop();
  await Category.drop();
  await sequelize.sync({ force: false });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
};

module.exports = seedAll;
