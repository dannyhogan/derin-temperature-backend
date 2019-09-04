const { Router } = require('express');
const Location = require('../models/Location');
const Temperature = require('../models/Temperature');

module.exports = Router()
  .get('/status', (req, res) => {
    res.sendStatus(204);
  })

  .post('/register', (req, res, next) => {
    const { name } = req.body;
    res.status(200);
    Location
      .create({ name })
      .then(location => res.send({ id: location._id }))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.sendStatus(204);
    Location
      .findByIdAndDelete(id)
      .catch(next);
  })

  .post('/temp/:id', (req, res, next) => {
    const id = req.params.id;
    const { temp } = req.body;
    Temperature
      .create({ temp, id })
      .then(created => res.send(created))
      .catch(next);
  });
