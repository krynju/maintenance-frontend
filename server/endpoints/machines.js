const router = require('express').Router();

const db = require('../db');
const models = require('../models');

router.get('/', (req, res) => {
  db.then(connection => connection.execute(
    `SELECT * FROM KGULINSK."obiekty"`,
  )).then((result) => {
    res.send(result.rows.map((row) => models.Machine.fromArray(row)));
  }).catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
});

router.put('/', (req, res) => {
  db.then(connection => connection.execute(
    `INSERT INTO KGULINSK."obiekty"
    ("id_obiekt", "nazwa", "stan", "nr_seryjny", "nr_wewnetrzny", "lokalizacja") VALUES
    ((SELECT MAX("id_obiekt") + 1 FROM KGULINSK."obiekty"), :name, :status, :serialNumber, :factoryNumber, :localization)`,
    models.Machine.toArray(req.body),
  )).then((result) => {
    console.log(result);
    res.sendStatus(200);
  }).catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
});

module.exports = router;
