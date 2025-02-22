const express = require('express');
const router = express.Router();
const { createPolygon, getAllPolygons } = require('../services/polygonService');

router.post('/', async (req, res) => {
  try {
    const { coordinates } = req.body;
    const polygon = await createPolygon(coordinates);
    res.json(polygon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const polygons = await getAllPolygons();
  res.json(polygons);
});

module.exports = router;
