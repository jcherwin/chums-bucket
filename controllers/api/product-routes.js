const router = require('express').Router();
const { Category, Product, User, CartItem, Item } = require('../../models');

router.get('/:id', async (req, res) => {
    try
    {
        const productData = await Category.findOne({ 
            where: {
                id: req.params.id
            },
            include: 
            [
                { model: Product }
            ]
        });
      
        const products = productData.map((product) => product.get({ plain: true }));

        //console.log(products);

        res.render('category', {
            products,
            loggedIn: req.session.loggedIn
        });
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});



module.exports = router;