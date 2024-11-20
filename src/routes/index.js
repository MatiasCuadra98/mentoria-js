// src/routes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('¡Hola, mundo desde Express!');
});

module.exports = router;
