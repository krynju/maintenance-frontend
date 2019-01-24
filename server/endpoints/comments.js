const router = require('express').Router();

const db = require('../db');
const models = require('../models');

router.get('/', (req, res) => {
  db.then(connection => connection.execute(
    `SELECT * FROM KGULINSK."komentarze"`,
  )).then((result) => {
    res.send(result.rows.map((row) => models.Comment.fromArray(row)));
  }).catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
});

router.put('/', (req, res) => {
  db.then(connection => connection.execute(
    `INSERT INTO KGULINSK."komentarze" ("id_komentarz", "tytul", "tresc", "czas_dodania",
                                   "id_zgloszenie", "id_uzytkownik") VALUES
     ((SELECT MAX("id_komentarz") + 1 FROM KGULINSK."komentarze"), :v0, :v1, CURRENT_DATE, :v2, :v3)`,
    models.Comment.toArray(req.body),
  )).then((result) => {
    console.log(result);
    res.sendStatus(200);
  }).catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
});

router.patch('/', (req, res) => {
  const array = models.Comment.toArrayAll(req.body);
  const id = array.shift();
  array.push(id);
  array[2] = new Date(array[2]).toISOString().slice(0, 19).replace('T', ' ');

  db.then(connection => connection.execute(
    `UPDATE KGULINSK."komentarze" SET 
    "tytul" = :v0, "tresc" = :v1, "czas_dodania" = TO_DATE(:v2, 'YYYY-MM-DD HH24:MI:SS'), "id_zgloszenie" = :v3, "id_uzytkownik" = :v4
    WHERE "id_komentarz" = :v5`,
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
