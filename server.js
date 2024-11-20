// src/app.js
const express = require('express');
const app = express();
const routes = require('./src/routes/index');

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', routes);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
