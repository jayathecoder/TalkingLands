const Polygon = require('../models/Polygon');
const { sequelize } = require('../config/database');

const createPolygon = async (coordinates) => {
  return await Polygon.create({
    coordinates: sequelize.literal(
      `ST_GeomFromGeoJSON('{
        "type": "Polygon",
        "coordinates": ${JSON.stringify(coordinates)}
      }')`
    ),
  });
};

const getAllPolygons = async () => {
  return await Polygon.findAll();
};

module.exports = { createPolygon, getAllPolygons };
