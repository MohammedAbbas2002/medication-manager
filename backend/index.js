const express = require('express');
const cors = require('cors');
const db = require('./db/database');
const authRoutes = require('./routes/auth');
const medRoutes = require('./routes/medications');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/medications', medRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));