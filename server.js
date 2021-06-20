const express = require('express');
const path = require('path');
const app = express();
const port = 3080;
const history = require('connect-history-api-fallback');

app.get('/api/test', (req, res) => {
    res.json({ 'message':'hello' });
})

app.use(history());
app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Server listening`);
});

