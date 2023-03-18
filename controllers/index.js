const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const categoryRoutes = require('./category-routes.js');
const cartRoutes = require('./cart-routes');

router.use('/', homeRoutes);
router.use('/category', categoryRoutes);
router.use('/cart', cartRoutes);
router.use('/api', apiRoutes);

module.exports = router;
