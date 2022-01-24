const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//create Category model
class Category extends Model { }

//define table columns
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true

    },
    category_name: {
      type: DataTypes.STRING,
      allowsNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
