const router = require('express').Router();
const { Product, Item } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const productData = await Product.findAll({
            where: { id: req.params.id }
        });

        const product = productData.map((product) => product.get({ plain: true }));
        
        const itemData = await Item.create({
            cart_id: 1/*req.session.cartId*/,
            name: product[0].name,
            price: product[0].price,
        });
        
        const itemData2 = await Item.findAll({
            where: { id: req.params.id }
        });
        const item = itemData2.map((item) => item.get({ plain: true }));
        console.log(item[0]);
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;