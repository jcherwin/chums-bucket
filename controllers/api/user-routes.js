const router = require('express').Router();
const { User, Cart } = require('../../models');

// CREATE new user
// eslint-disable-next-line no-use-before-define
router.post('/', async (req, res) => {
    try {
        // Create the user with supplied info
        const dbUserData = await User.create({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        // Create the associated cart
        const cartData = await Cart.create({
            user_id: dbUserData.id
        });

        // Save session with username, id, and cartId
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = dbUserData.id;
            req.session.username = dbUserData.name;
            req.session.cartId = cartData.id;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
            include: { model: Cart }
        });

        // Get the cart from the user
        const getCart = (cart) => cart.get({ plain: true });
        const cart = getCart(dbUserData.cart);

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = dbUserData.id;
            req.session.username = dbUserData.name;
            req.session.cartId = cart.id;

            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
