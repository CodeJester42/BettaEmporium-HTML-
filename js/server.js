const express = require('express');
const app = express();
const port = 3005;

app.use(express.static('public'));

app.get('/search', (req, res) => {
    const query = req.query.query;

    res.json({ results: ['Product 1', 'Product 2', 'Product 3'] });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});