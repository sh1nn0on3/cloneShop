'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    image: DataTypes.STRING,
    cpu: DataTypes.STRING,
    ssd: DataTypes.STRING,
    card: DataTypes.STRING,
    screen: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};