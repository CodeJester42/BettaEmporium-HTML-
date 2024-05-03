const express = require('express');
const app = express();
const path = require('path');
const port = 3009;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/search', (req, res) => {
    const query = req.query.query;

    res.json({ results: ['Product 1', 'Product 2', 'Product 3'] });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});