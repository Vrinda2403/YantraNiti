const express = require('express');

const router = express.Router();

const {
    generateYantra
} = require('../controllers/astronomyController');

router.post('/generate', generateYantra);

module.exports = router;