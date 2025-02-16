const express = require('express');
const helmet = require('helmet');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(helmet());

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.json({ message: 'welcome aboard' });
});

app.get('/hello_world', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// Listen on all network interfaces
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${port}`);
});