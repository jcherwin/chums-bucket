var _ = require('lodash');
const router = require('express').Router();
const { Category, Product, User, Item, Cart } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try
    {
        const cartData = await Cart.findOne({
            where: { user_id: req.session.userId },
            include: [ { model: Item } ]
        });
      
        const getCart = (cart) => cart.get({ plain: true });
        const cart = getCart(cartData);

        //console.log(cartData)

        const prices = _.map(cart.items, 'price');
        cart.subtotal = _.sum(prices)

        console.log(cart);

        res.render('cart', {
            cart,
            loggedIn: req.session.loggedIn
        });
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});

module.exports = router;