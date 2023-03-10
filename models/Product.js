const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model { }

Product.init(
    {
        _id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        sku: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        commodity_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        visible: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        base_price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        currency_id: {
            type: DataTypes.STRING,
            defaultValue: 'BRL',
        },
        currency_symbol: {
            type: DataTypes.STRING,
            defaultValue: 'R$',
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category_id: {
            references: {
                model: 'category',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;