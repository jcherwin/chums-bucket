const router = require('express').Router();
const { Product, Item } = require('../../models');

//GET product by id and create item for cart
router.get('/:id', async (req, res) => {
    try {
        const productData = await Product.findAll({
            where: { id: req.params.id }
        });

        const product = productData.map((product) => product.get({ plain: true }));
        
        // Create an Item based off of the product with the user's cartId
        const itemData = await Item.create({
            cart_id: req.session.cartId,
            name: product[0].name,
            price: product[0].price,
            img: product[0].img,
        });

        res.status(200).json(itemData);
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// UPDATE the quantity of one item
// router.put('/:id', async (req, res) => {
//     try {
//         const itemData = await Item.update(
//         {
//             quantity: req.body.quantity,
//         },
//         {
//             where: { id: req.params.id },
//         });

//         res.status(200).json(itemData);
        
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

//DELETE one item
router.delete('/:id', async (req, res) => {   
    try {
        const itemData = await Item.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json(itemData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//DELETE all item
router.delete('/', async (req, res) => {   
    try {
        const itemData = await Item.destroy({
            where: { cart_id: req.session.cartId },
        });
        res.status(200).json(itemData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;