const router = require('express').Router();
const Workout = require('../models/workout.js');

router.post('/api/workouts', ({ body }, res) => {
  Workout.create(body)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get('/api/workouts', (req, res) => {
  Workout.find(lastWorkout._id)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;