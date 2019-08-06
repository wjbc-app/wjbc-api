const express = require(`express`);
const fbRouter = require(`../components/services/facebook/router`);

const router = express.Router();
router.use(`/facebook`, fbRouter);
// router.use(`/youtube`, yTRouter;
// router.use(`/spotify`, spotRouter);

module.exports = router;
