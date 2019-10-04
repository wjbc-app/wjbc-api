const express = require(`express`);
const { getGroups, getGroupFeed } = require(`./controller`);
const router = express.Router();

router.route(`/getGroups`).get(getGroups);
// router.route(`/getGroupFeed`).get(getGroupFeed);


module.exports = router;
