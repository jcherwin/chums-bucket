const { Product } = require('../models');

// Seed data for products
const productData = [
    {
        name: 'Greek Salmon Bowl',
        price: 9.99,
        category_id: 1,
        img: 'https://tinyurl.com/2v75nsm7',
    },
    {
        name: 'Teriyaki Salmon',
        price: 11.99,
        category_id: 1,
        img: 'https://tinyurl.com/tvamks5x',
    },
    {
        name: 'Salmon Chowder',
        price: 8.99,
        category_id: 1,
        img: 'https://tinyurl.com/3jz5cneu',
    },
    {
        name: 'Crab Cakes ',
        price: 12.99,
        category_id: 2,
        img: 'https://tinyurl.com/mr2t53sf',
    },
    {
        name: 'Crab Bisque',
        price: 15.99,
        category_id: 2,
        img: 'https://tinyurl.com/2p957t69',
    },
    {
        name: 'Crab Legs',
        price: 14.99,
        category_id: 2,
        img: 'https://tinyurl.com/4ctukbd2',
    },
    {
        name: 'Lobster Mac and Cheese',
        price: 16.99,
        category_id: 3,
        img: 'https://tinyurl.com/55zym4wm',
    },
    {
        name: 'Lobster Tails',
        price: 14.99,
        category_id: 3,
        img: 'https://tinyurl.com/fh6tuuyp',
    },
    {
        name: 'Lobster Rolls',
        price: 16.99,
        category_id: 3,
        img: 'https://tinyurl.com/yc2rtfp4',
    },
    {
        name: 'Shrimp Fried Rice',
        price: 13.99,
        category_id: 4,
        img: 'https://tinyurl.com/3jdn2whj',
    },
    {
        name: 'Coconut Shrimp',
        price: 12.99,
        category_id: 4,
        img: 'https://tinyurl.com/4tn4sprs',
    },
    {
        name: 'Shrimp Pasta',
        price: 15.99,
        category_id: 4,
        img: 'https://tinyurl.com/pcw8kavn',
    },
    {
        name: 'Soda',
        price: 2.99,
        category_id: 5,
        img: 'https://tinyurl.com/yckn36xh',
    },
    {
        name: 'Fruit Punch',
        price: 3.99,
        category_id: 5,
        img: 'https://tinyurl.com/2p8fswu6',
    },
    {
        name: 'Margarita',
        price: 4.99,
        category_id: 5,
        img: 'https://tinyurl.com/3stvnjmj',
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
