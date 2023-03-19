const { Category } = require('../models');

const categoryData = [
    {
        name: 'Salmon',
        img: 'https://tinyurl.com/52ztew8b',
    },
    {
        name: 'Crab',
        img: 'https://tinyurl.com/5bw8njs9',
    },
    {
        name: 'Lobster',
        img: 'https://tinyurl.com/372v7wkw',
    },
    {
        name: 'Shrimp',
        img: 'https://tinyurl.com/5n8h9etw',
    },
    {
        name: 'Drinks',
        img: 'https://tinyurl.com/2p8ttefz',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
