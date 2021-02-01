const express = require('express');
const json = require('body-parser').json();

const dogQueue = require('./dogQueue.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  return res.status(200).json(dogQueue.get());
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const { person } = req.body;
  dogQueue.enqueue(person);
  res.status(201).json(person);
});

router.delete('/', json, (req, res) => {
  const { person } = req.body;

  dogQueue.dequeue(person);

  res.json(person);
});

module.exports = router;
