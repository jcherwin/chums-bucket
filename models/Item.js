const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model { }

Item.init(
    {
        _id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        product_id: {
            type: DataTypes.STRING,
            references: {
                model: 'product',
                key: '_id',
            },
        },
        sku: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        keep_item_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'item',
    }
);

module.exports = Item;