const { Product } = require('../models');

const productData = [
    {
        _id: '1',
        commodity_type: 'physical',
        name: 'Plain T-Shirt',
        slug: 'plain-t-shirt',
        available: true,
        visible: true,
        base_price: 14.99,
        quantity: 14,
        category_id: 1,
    },
    {
        _id: '2',
        commodity_type: 'physical',
        name: 'Plain T-Shirt 2',
        slug: 'plain-t-shirt-2',
        available: true,
        visible: true,
        base_price: 14.99,
        quantity: 14,
        category_id: 2,
    },
    {
        _id: '3',
        commodity_type: 'physical',
        name: 'Plain T-Shirt 3',
        slug: 'plain-t-shirt-3',
        available: true,
        visible: true,
        base_price: 14.99,
        quantity: 14,
        category_id: 3,
    },
    {
        _id: '4',
        commodity_type: 'physical',
        name: 'Plain T-Shirt 4',
        slug: 'plain-t-shirt-4',
        available: true,
        visible: true,
        base_price: 14.99,
        quantity: 14,
        category_id: 4,
    },
    {
        _id: '5',
        commodity_type: 'physical',
        name: 'Plain T-Shirt 5',
        slug: 'plain-t-shirt-5',
        available: true,
        visible: true,
        base_price: 14.99,
        quantity: 14,
        category_id: 5,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
