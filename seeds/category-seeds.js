const { Category } = require('../models');

// Seed data for categories
const categoryData = [
    {
        name: 'Salmon',
        img: '/images/categories/salmon.jpg',
        description: 'Try some of our nutritious, mouth-watering salmon dishes.',
    },
    {
        name: 'Crab',
        img: '/images/categories/crab.jpg',
        description: 'Tease your tastebuds with our delectable crab meals.',
    },
    {
        name: 'Lobster',
        img: '/images/categories/lobster.jpg',
        description: 'Your wait for real New England seafood is over!',
    },
    {
        name: 'Shrimp',
        img: '/images/categories/shrimp.jpg',
        description: 'Treat yourself with some our savory shrimp entrees.',
    },
    {
        name: 'Drinks',
        img: '/images/categories/drinks.jpg',
        description: 'Stay refreshed with our selection of drinks!',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
