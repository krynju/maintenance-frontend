const router = require('express').Router();

const db = require('../db');
const models = require('../models');

router.get('/', (req, res) => {
  db.then(connection => connection.execute(
    `SELECT * FROM KGULINSK."obiekty"`,
  )).then((result) => {
    res.send(result.rows.map((row) => models.Machine.fromArray(row)));
  });
});

module.exports = router;
