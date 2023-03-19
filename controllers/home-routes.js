const router = require('express').Router();
const { Category, } = require('../models');

// Render the categories to the homepage
router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll();

        const categories = categoryData.map((category) => category.get({ plain: true }));

        console.log(categories);

        res.render('home', {
            categories,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Send the user to Login page
router.get('/login', (req, res) => {
    console.log('LOGIN');
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
