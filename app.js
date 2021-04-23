const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is my first continous integration and continous delivery project. I have created a review pipeline which manual reviews happen'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
