const FB = require(`fb`);
// Sets up facebook instance
require('./setup');

const getGroups = new Promise((resolve, reject) => {
  try {
    FB.api('me/groups', (res) => {
      resolve('Post Id: ' + JSON.stringify(res));
    });
  } catch (e) {
    reject(`something went wrong`, res);
  }
});

const getGroupFeed = new Promise((resolve, reject) => {
  try {
    FB.api(`${process.env.GROUP_ID}/feed`, (res) => {
      console.log('helo', res);
      resolve(`Result`, JSON.stringify(res));
    });
  } catch (e) {
    reject(`something went wrong`, res);
  }
});

module.exports = {
  getGroups,
  getGroupFeed
};
