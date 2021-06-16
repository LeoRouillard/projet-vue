const express = require('express');
const path = require('path');
const app = express();
const port = 3080;
const history = require('connect-history-api-fallback');

app.use(history());
app.use(express.static(path.join(__dirname, '/dist')));

app.get('/api/toto', (req, res) => {
    res.json({ message:'hello' });
})

app.listen(port, () => {
  console.log(`Server listening on the port ${port}`);
});
app.use(function (req, res) {
  res.status(404).send('Error 404');
});