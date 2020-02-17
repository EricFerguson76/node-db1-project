const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
  db('accounts')
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(() => {
      res.status(500).json({ error: 'failed to retrieve accounts' });
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db('accounts')
    .where({ id })
    .first()
    .then(account => {
      res.status(200).json(account);
    })
    .catch(() => {
      res.status(500).json({ error: 'failed to retrieve account' });
    });
});

router.post('/', (req, res) => {
  db('accounts')
    .insert(req.body, 'id')
    .then(inserted => {
      res.status(201).json(inserted);
    })
    .catch(() => {
      res.status(500).json({ error: 'failed to add account' });
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db('accounts')
    .where({ id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(() => {
      res.status(500).json({ error: 'failed to update account' });
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  db('accounts')
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(() => {
      res.status(500).json({ error: 'failed to remove account' });
    });
});

module.exports = router;
