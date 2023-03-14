const router = require('express').Router();
const userRoutes = require('./user-routes');
const productRoutes = require('./product-routes');

router.use('/users', userRoutes);
router.use('/product', productRoutes);

module.exports = router;
