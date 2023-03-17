const router = require('express').Router();
const userRoutes = require('./user-routes');
const itemRoutes = require('./item-routes');
const cartRoutes = require('./cart-routes');

router.use('/users', userRoutes);
router.use('/cart', cartRoutes);
router.use('/item', itemRoutes);

module.exports = router;
