const router = require("express").Router();
const userRoutes = require("./userRoute");
const blogRoutes = require("./blogRoute");
const commentsRoutes = require("./commentRoute");

router.use('/users', userRoutes);
router.use('blogs', blogRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;