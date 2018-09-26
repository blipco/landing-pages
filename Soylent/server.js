const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));
app.use(express.static('css'))

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));

module.exports = app;
