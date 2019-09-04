const request = require('superagent');

module.exports = () => {
  request
    .post('http://temp.alchemycodelab.io/subscribe')
    .send({ url: 'https://derin-temperature-app.herokuapp.com/' });
};
