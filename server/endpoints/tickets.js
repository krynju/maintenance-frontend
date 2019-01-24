const router = require('express').Router();

const db = require('../db');
const models = require('../models');

router.get('/', (req, res) => {
  db.then(connection => connection.execute(
    `SELECT * FROM KGULINSK."zgloszenia"`,
  )).then((result) => {
    res.send(result.rows.map((row) => models.Ticket.fromArray(row)));
  });
});

module.exports = router;
