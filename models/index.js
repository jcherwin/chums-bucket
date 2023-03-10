const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Item = require('./Item');
const Cart = require('./Cart');
const CartItem = require('./CartItem');

Item.belongsTo(Cart, {
    through: CartItem,
    foreignKey: 'item_id',
});

Cart.hasMany(Item, {
    through: CartItem,
    foreignKey: 'cart_id',
});

Cart.belongsTo(User, {
    foreignKey: 'cart_id',
});

User.hasOne(Cart, {
    foreignKey: 'cart_id',
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

module.exports = {
    Product,
    Category,
    User,
    Item,
    Cart,
};
