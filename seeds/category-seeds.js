const { Category } = require('../models');

const categoryData = [
    {
        name: 'One',
    },
    {
        name: 'Two',
    },
    {
        name: 'Three',
    },
    {
        name: 'Four',
    },
    {
        name: 'Five',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
