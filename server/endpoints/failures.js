const router = require('express').Router();

const db = require('../db');
const models = require('../models');

router.get('/', (req, res) => {
  db.then(connection => connection.execute(
    `SELECT * FROM KGULINSK."awarie"`,
  )).then((result) => {
    res.send(result.rows.map((row) => models.Failure.fromArray(row)));
  });
});

router.put('/', (req, res) => {
  db.then(connection => connection.execute(
    `INSERT INTO KGULINSK."awarie" ("id_awaria", "czas_zgloszenia", "opis", "nazwa") VALUES
     ((SELECT MAX("id_awaria") + 1 FROM KGULINSK."awarie"), CURRENT_DATE, :description, :name)`,
    models.Failure.toArray(req.body),
  )).then((result) => {
    console.log(result);
    res.sendStatus(200);
  }).catch((err) => {
    console.log(err);
  })
});

module.exports = router;
