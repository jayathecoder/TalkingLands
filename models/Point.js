const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/database');

class Point extends Model {}

Point.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coordinates: { type: DataTypes.GEOMETRY('POINT', 4326), allowNull: false },
  },
  { sequelize, modelName: 'Point' }
);

module.exports = Point;
