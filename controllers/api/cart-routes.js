var _ = require('lodash');
const router = require('express').Router();
const { Category, Product, User, CartItem, Item, Cart } = require('../../models');

router.get('/', async (req, res) => {
    try
    {
        const cartData = await Cart.findOne({
            where: { user_id: 1/*req.session.userId*/ },
            include: 
            [
                { model: Item }
            ]
        });

        if (!cartData)  {
            const cartData = await Cart.create({
                user_id: req.session.userId
            });
            req.session.save(() => {
                req.session.cartId = cartData.id;

                res.status(200).json(cartData);
            })
        }
      
        const getCart = (cart) => cart.get({ plain: true });
        const cart = getCart(cartData);

        const prices = _.map(cart.items, 'price');
        
        cart.subtotal = _.sum(prices)
        console.log(cart);

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