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

router.put('/', (req, res) => {
  db.then(connection => connection.execute(
    `INSERT INTO KGULINSK."zgloszenia"
    ("id_zgloszenie", "nazwa", "opis", "priorytet",
    "czas_zgloszenia", "czas_zakonczenia", "status",
    "id_departament", "id_obiekt", "id_awaria") VALUES
    ((SELECT MAX("id_zgloszenie") + 1 FROM KGULINSK."zgloszenia"), :name, :description, :priority, CURRENT_DATE, NULL, :status, 0, :machine, :failure)`,
    models.Ticket.toArray(req.body),
  )).then((result) => {
    console.log(result);
    res.sendStatus(200);
  }).catch((err) => {
    console.log(err);
  })
});

module.exports = router;
