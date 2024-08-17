const express = require('express');
const router = express.Router();

// Mock Authentication
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'Zdaq6Cxyc35Rz4JYH98K') {
        req.session.user = username;
        res.redirect('/auth/dashboard');
    } else {
        res.redirect('/auth/login');
    }
});

// Login Page
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

// Dashboard Page
router.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.render('dashboard', { title: 'Dashboard', username: req.session.user });
    } else {
        res.redirect('/auth/login');
    }
});

// Logout
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
