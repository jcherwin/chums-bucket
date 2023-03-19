var _ = require('lodash');
const router = require('express').Router();
const { Item, Cart } = require('../models');
const withAuth = require('../utils/auth');

// Render the cart and a corresponding subtotal
router.get('/', withAuth, async (req, res) => {
    try {
        const cartData = await Cart.findOne({
            where: { user_id: req.session.userId },
            include: [ { model: Item } ]
        });

        const getCart = (cart) => cart.get({ plain: true });
        const cart = getCart(cartData);

        // Use lodash to deconstruct price from the items and get a sum.
        const prices = _.map(cart.items, 'price');
        cart.subtotal = _.sum(prices);

        res.render('cart', {
            cart,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;