const router = require('express').Router();

const db = require('../db');
const models = require('../models');

router.get('/:code', (req, res) => {
  db.then(connection => connection.execute(
    `SELECT * FROM KGULINSK."uzytkownicy" WHERE "id_pracownika" = :id`,
    [req.params['code']]
  )).then((result) => {
    res.send(models.User.fromArray(result.rows[0]));
  }).catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
});

module.exports = router;
