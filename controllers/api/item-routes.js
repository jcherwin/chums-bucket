const router = require('express').Router();
const ecomCart = require('@ecomplus/shopping-cart');
const { Category, Product, User, CartItem, Item } = require('../../models');

router.post('/:id', async (req, res) => {
    try {
        const productData = await Product.findOne({
            where: { _id: req.params.id }
        });

        const product = productData.map((product) => product.get({ plain: true }));

        ecomCart.addProduct({product});
    
        // const item = ecomCart.parseProduct({product});

        const itemData = await Item.create({
            product_id: product._id,
            cart_id: req.session.cartId,
            name: product.name,
            price: product.base_price,
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;