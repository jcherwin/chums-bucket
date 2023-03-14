const router = require('express').Router();
const { Category, Product, User, CartItem, Item, Cart } = require('../../models');

router.get('/', async (req, res) => {
    try
    {
        const cartData = await Cart.findOne({
            where: { user_id: req.session.userId },
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
                req.session.cartId = cartData._id;

                res.status(200).json(cartData);
            })
        }
      
        const cart = cartData.map((cart) => cart.get({ plain: true }));

        //console.log(categories);

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