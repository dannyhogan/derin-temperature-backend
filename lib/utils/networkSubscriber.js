const request = require('superagent');

module.exports = () => {
  request
    .post('http://temp.alchemycodelab.io/subscribe')
    .send({ url: process.env.HOST });
};
