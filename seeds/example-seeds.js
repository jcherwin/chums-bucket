const { Cart, User } = require('../models');

const cartData = [
    {
        user_id: 1,
    },
    {
        user_id: 2,
    },
    {
        user_id: 3,
    },
];

const userData = [
    {
        name: 'example',
        email: 'Example@test.com',
        password: 'password1',
    },
    {
        name: 'example',
        email: 'Example2@test.com',
        password: 'password2',
    },
    {
        name: 'example',
        email: 'Example3@test.com',
        password: 'password3',
    },
];

const seedCarts = () => Cart.bulkCreate(cartData);
const seedUsers = () => User.bulkCreate(userData);

module.exports = {seedCarts, seedUsers};
