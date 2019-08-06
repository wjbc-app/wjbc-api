const express = require(`express`);
const facebookRouter = require(`../components/services/facebook/router`);

const router = express.Router();
router.use(`/facebook`, facebookRouter);
// router.use(`/youtube`, yTRouter;
// router.use(`/spotify`, spotRouter);

module.exports = router;
