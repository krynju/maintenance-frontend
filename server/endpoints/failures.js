const router = require('express').Router();

const db = require('../db');
const models = require('../models');

router.get('/', (req, res) => {
  db.then(connection => connection.execute(
    `SELECT * FROM KGULINSK."awarie"`,
  )).then((result) => {
    res.send(result.rows.map((row) => models.Failure.fromArray(row)));
  }).catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
});

router.get('/active', (req, res) => {
  db.then(connection => connection.execute(
    `SELECT * FROM KGULINSK."awarie" WHERE "id_awaria" IN (SELECT "id_awaria" as cnt FROM (SELECT * FROM KGULINSK."zgloszenia" WHERE "status" <> 'zakończone') GROUP BY "id_awaria" HAVING COUNT(*) > 0)`,
  )).then((result) => {
    res.send(result.rows.map((row) => models.Failure.fromArray(row)));
  }).catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
});

router.get('/active/count', (req, res) => {
  db.then(connection => connection.execute(
    `SELECT COUNT(*) FROM (SELECT "id_awaria", COUNT(*) as cnt FROM (SELECT * FROM KGULINSK."zgloszenia" WHERE "status" <> 'zakończone') GROUP BY "id_awaria" HAVING COUNT(*) > 0)`,
  )).then((result) => {
    res.send({ count: result.rows[0][0] })
  }).catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
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
    res.sendStatus(400);
    console.log(err);
  })
});

router.patch('/', (req, res) => {
  const array = models.Failure.toArrayAll(req.body);
  const id = array.shift();
  array.push(id);
  array[0] = new Date(array[0]).toISOString().slice(0, 19).replace('T', ' ');

  db.then(connection => connection.execute(
    `UPDATE KGULINSK."awarie" SET 
    "czas_zgloszenia" = TO_DATE(:v0, 'YYYY-MM-DD HH24:MI:SS'), "opis" = :v1, "nazwa" = :v2
    WHERE "id_awaria" = :v3
    `,
    array,
  )).then((result) => {
    console.log(result);
    res.sendStatus(200);
  }).catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
});

router.delete('/:id', (req, res) => {
  db.then(connection => connection.execute(
    `DELETE FROM KGULINSK."awarie" WHERE "id_awaria" = :v0`,
    [req.params['id']],
  )).then((result) => {
    res.sendStatus(200);
  }).catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
});

module.exports = router;
