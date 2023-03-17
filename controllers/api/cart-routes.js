var _ = require('lodash');
const router = require('express').Router();
const { Category, Product, User, Item, Cart } = require('../../models');

router.get('/', async (req, res) => {
    try
    {
        const cartData = await Cart.findOne({
            where: { user_id: 1/*req.session.userId*/ },
            include: [ { model: Item } ]
        });
      
        const getCart = (cart) => cart.get({ plain: true });
        const cart = getCart(cartData);

        console.log(cartData)

        res.render('cart', {
            cart,
        });
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});

module.exports = router;