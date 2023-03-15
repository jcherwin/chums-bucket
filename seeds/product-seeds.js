const { Product } = require('../models');

const productData = [
    {
        id: 1,
        name: 'Plain T-Shirt',
        price: 14.99,
        category_id: 1,
    },
    {
        id: 2,
        name: 'Plain T-Shirt2',
        price: 12.99,
        category_id: 2,
    },
    {
        id: 3,
        name: 'Plain T-Shirt3',
        price: 16.99,
        category_id: 3,
    },
    {
        id: 4,
        name: 'Plain T-Shirt4',
        price: 18.99,
        category_id: 4,
    },
    {
        id: 5,
        name: 'Plain T-Shirt5',
        price: 19.99,
        category_id: 5,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
