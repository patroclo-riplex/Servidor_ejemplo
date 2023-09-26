// server.js

const express = require('express');
const app = express();
const PORT = 3000;
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use(express.json());  // Habilita el uso de JSON en las solicitudes

app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
