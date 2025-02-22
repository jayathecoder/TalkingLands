const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/database');

class Polygon extends Model {}

Polygon.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coordinates: { type: DataTypes.GEOMETRY('POLYGON', 4326), allowNull: false },
  },
  { sequelize, modelName: 'Polygon' }
);

module.exports = Polygon;
