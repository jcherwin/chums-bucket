const router = require('express').Router();
const userRoutes = require('./user-routes');
const itemRoutes = require('./item-routes');

router.use('/users', userRoutes);
router.use('/item', itemRoutes);

module.exports = router;
