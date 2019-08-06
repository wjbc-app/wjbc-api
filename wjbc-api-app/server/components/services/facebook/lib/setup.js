const FB = require(`fb`);

new FB.Facebook({
  appId: process.env.FB_ID,
  autoLogAppEvents: true,
  xfbml: true,
  version: `4.0`
});

FB.setAccessToken(process.env.FB_ACCESS_TOKEN);
