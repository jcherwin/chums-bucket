// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class CartItem extends Model { }

// CartItem.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         cart_id: {
//             type: DataTypes.STRING,
//             references: {
//                 model: 'cart',
//                 key: '_id',
//             }
//         },
//         item_id: {
//             type: DataTypes.STRING,
//             references: {
//                 model: 'item',
//                 key: '_id',
//             }
//         },
//     },
//     {
//         sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'cartItem',
//     }
// );

// module.exports = CartItem;