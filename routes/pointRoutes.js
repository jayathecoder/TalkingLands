const express = require('express');
const router = express.Router();
const { createPoint, getAllPoints } = require('../services/pointService');

router.post('/', async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const point = await createPoint(latitude, longitude);
    res.json(point);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const points = await getAllPoints();
  res.json(points);
});

module.exports = router;
