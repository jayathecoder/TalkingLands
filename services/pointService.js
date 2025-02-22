const Point = require('../models/Point');
const { sequelize } = require('../config/database');

const createPoint = async (latitude, longitude) => {
  return await Point.create({
    coordinates: sequelize.literal(`ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)`),
  });
};

const getAllPoints = async () => {
  return await Point.findAll();
};

module.exports = { createPoint, getAllPoints };
