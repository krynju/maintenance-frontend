const router = require('express').Router();

const db = require('../db');
const models = require('../models');

router.get('/', (req, res) => {
  db.then(connection => connection.execute(
    `SELECT * FROM KGULINSK."przydzialy"`,
  )).then((result) => {
    res.send(result.rows.map((row) => models.Assignment.fromArray(row)));
  }).catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
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
    res.sendStatus(400);
    console.log(err);
  })
});

router.patch('/', (req, res) => {
  const array = models.Assignment.toArrayAll(req.body);
  const id = array.shift();
  array.push(id);
  array[1] = new Date(array[1]).toISOString().slice(0, 19).replace('T', ' ');

  db.then(connection => connection.execute(
    `UPDATE KGULINSK."przydzialy" SET
    "rola" = :v0, "czas_przydzialu" = TO_DATE(:v1, 'YYYY-MM-DD HH24:MI:SS'), "id_zgloszenie" = :v2, "id_uzytkownik" = :v3
    WHERE "id_przydzial" = :vx`,
    array,
  )).then((result) => {
    console.log(result);
    res.sendStatus(200);
  }).catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
});

module.exports = router;
