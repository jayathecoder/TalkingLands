const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./config/database');
const pointRoutes = require('./routes/pointRoutes');
const polygonRoutes = require('./routes/polygonRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/points', pointRoutes);
app.use('/polygons', polygonRoutes);

sequelize.sync();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
