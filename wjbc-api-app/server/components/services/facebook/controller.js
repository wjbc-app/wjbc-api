const requests = require(`./lib/requests`);

const getGroups = async (req, res) => {
  try {
    const result = await requests.getGroups();
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// const getGroupFeed = async (req, res) => {
//   try {
//     const result = await requests.getGroupFeed();
//     res.status(200).send(result);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// };

module.exports = {
  getGroups
  // getGroupFeed
};
