const router = require('express').Router();

const db = require('../db');
const models = require('../models');

router.get('/', (req, res) => {
  db.then(connection => connection.execute(
    `SELECT * FROM KGULINSK."przydzialy"`,
  )).then((result) => {
    res.send(result.rows.map((row) => models.Assignment.fromArray(row)));
  });
});

router.put('/', (req, res) => {
  db.then(connection => connection.execute(
    `INSERT INTO KGULINSK."przydzialy"
    ("id_przydzial", "rola", "czas_przydzialu", "id_zgloszenie", "id_uzytkownik") VALUES
    ((SELECT MAX("id_przydzial") + 1 FROM KGULINSK."przydzialy"), :role, CURRENT_DATE, :ticket, 0)`,
    models.Assignment.toArray(req.body),
  )).then((result) => {
    console.log(result);
    res.sendStatus(200);
  }).catch((err) => {
    console.log(err);
  })
});

module.exports = router;
