const { Product } = require('../models');

// Seed data for products
const productData = [
    {
        name: 'Greek Salmon Bowl',
        price: 9.99,
        category_id: 1,
        img: '../images/products/greek-salmon-bowl.jpg',
    },
    {
        name: 'Teriyaki Salmon',
        price: 11.99,
        category_id: 1,
        img: '../images/products/teriyaki-salmon.jpg',
    },
    {
        name: 'Salmon Chowder',
        price: 8.99,
        category_id: 1,
        img: '../images/products/salmon-chowder.jpg',
    },
    {
        name: 'Crab Cakes',
        price: 12.99,
        category_id: 2,
        img: '../images/products/crab-cakes.jpg',
    },
    {
        name: 'Crab Bisque',
        price: 15.99,
        category_id: 2,
        img: '../images/products/crab-bisque.jpg',
    },
    {
        name: 'Crab Legs',
        price: 14.99,
        category_id: 2,
        img: '../images/products/crab-legs.jpg',
    },
    {
        name: 'Lobster Mac and Cheese',
        price: 16.99,
        category_id: 3,
        img: '../images/products/lobster-mac-and-cheese.jpg',
    },
    {
        name: 'Lobster Tails',
        price: 14.99,
        category_id: 3,
        img: '../images/products/lobster-tails.jpg',
    },
    {
        name: 'Lobster Rolls',
        price: 16.99,
        category_id: 3,
        img: '../images/products/lobster-rolls.jpg',
    },
    {
        name: 'Shrimp Fried Rice',
        price: 13.99,
        category_id: 4,
        img: '../images/products/shrimp-fried-rice.jpg',
    },
    {
        name: 'Coconut Shrimp',
        price: 12.99,
        category_id: 4,
        img: '../images/products/coconut-shrimp.jpg',
    },
    {
        name: 'Shrimp Pasta',
        price: 15.99,
        category_id: 4,
        img: '../images/products/shrimp-pasta.jpg',
    },
    {
        name: 'Soda',
        price: 2.99,
        category_id: 5,
        img: '../images/products/soda.jpg',
    },
    {
        name: 'Fruit Punch',
        price: 3.99,
        category_id: 5,
        img: '../images/products/fruit-punch.jpg',
    },
    {
        name: 'Margarita',
        price: 4.99,
        category_id: 5,
        img: '../images/products/margarita.jpg',
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
