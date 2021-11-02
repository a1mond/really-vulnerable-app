const express = require('express');
const app = express();
const db = require('./queries');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

const PORT = 3000;

app.get('/', (req, res) => {
    if (req.query.q) db.getItemsById(req, res);
    else db.getItems(req, res);
})

app.get('/secured', (req, res) => {
    if (req.query.q) db.getItemsByIdSec(req, res);
    else db.getItems(req, res);
})

app.listen(PORT, () => {
    console.log(`Server listens on port ${PORT}`);
});