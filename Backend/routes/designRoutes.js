const express = require('express');

const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

const {
    saveDesign,
    getDesigns
} = require('../controllers/designController');

router.post('/save', authMiddleware, saveDesign);
router.get('/', authMiddleware, getDesigns);

module.exports = router;