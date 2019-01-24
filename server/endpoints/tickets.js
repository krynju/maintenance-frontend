const router = require('express').Router();
const moment = require('moment');

const db = require('../db');
const models = require('../models');

router.get('/', (req, res) => {
  db.then(connection => connection.execute(
    `SELECT * FROM KGULINSK."zgloszenia"`,
  )).then((result) => {
    res.send(result.rows.map((row) => models.Ticket.fromArray(row)));
  }).catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
});

router.get('/active/count', (req, res) => {
  db.then(connection => connection.execute(
    `SELECT COUNT(*) FROM KGULINSK."zgloszenia" WHERE "status" <> 'zakończone'`,
  )).then((result) => {
    res.send({ count: result.rows[0][0] });
  }).catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
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
    res.sendStatus(400);
    console.log(err);
  })
});

router.patch('/', (req, res) => {
  if (req.body.status === 'zakończone') {
    req.body.closed = moment().format('YYYY-MM-DD HH:mm:ss');
  }

  const array = models.Ticket.toArrayAll(req.body);
  const id = array.shift();
  array.push(id);
  array[3] = moment(array[3]).format('YYYY-MM-DD HH:mm:ss');
  array[4] = moment(array[4]).format('YYYY-MM-DD HH:mm:ss');
  db.then(connection => connection.execute(
    `UPDATE KGULINSK."zgloszenia" SET
    "nazwa" = :v0, "opis" = :v1, "priorytet" = :v2,
    "czas_zgloszenia" = TO_DATE(:v3, 'YYYY-MM-DD HH24:MI:SS'), "czas_zakonczenia" = TO_DATE(:v4, 'YYYY-MM-DD HH24:MI:SS'), "status" = :v5,
    "id_departament" = :v6, "id_obiekt" = :v7, "id_awaria" = :v8
    WHERE "id_zgloszenie" = :v9`,
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
