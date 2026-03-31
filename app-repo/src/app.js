const express = require('express');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'sample-node-app',
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Sample Node.js app is running',
    version: process.env.APP_VERSION || 'dev'
  });
});

module.exports = app;
