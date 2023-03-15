const router = require('express').Router();
const { Category, Product, User, CartItem, Item } = require('../../models');

router.get('/:id', async (req, res) => {
    try
    {
        const productData = await Category.findAll({ 
            where: {
                id: req.params.id
            },
            include: 
            [
                { model: Product }
            ]
        });
      
        const category = productData.map((product) => product.get({ plain: true }));

        console.log(category[0]);

        res.render('category', {
            category,
            loggedIn: req.session.loggedIn
        });
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});



module.exports = router;