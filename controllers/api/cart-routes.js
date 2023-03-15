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
      
        const cart = (cart) => cart.get({ plain: true });

        console.log(cart(cartData));

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