const express = require('express');
const app = express();
const PORT = 3000;

require('./db.js');

app.use(require('./routes/index.routes.js'));

app.listen(PORT);
console.log('Servidor corriendo en puerto: ', PORT);