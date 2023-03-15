const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Item = require('./Item');
const Cart = require('./Cart');
// const CartItem = require('./CartItem');

Cart.hasMany(Item, {
    foreignKey: 'cart_id',
});

Item.belongsTo(Cart, {
    foreignKey: 'cart_id',
});

User.hasOne(Cart, {
    foreignKey: 'user_id',
});

Cart.belongsTo(User, {
    foreignKey: 'user_id',
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
});


module.exports = {
    Product,
    Category,
    User,
    Item,
    Cart,
};
