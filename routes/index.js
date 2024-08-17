const express = require('express');
const router = express.Router();

// Main page
router.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect('/auth/dashboard');
    } else {
        res.render('main', { title: 'Main Page' });
    }
});

module.exports = router;
