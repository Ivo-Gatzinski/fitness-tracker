const router = require("express").Router();
const Workout = require("../models/Workout.js");
const path = require("path");

router.post("/api/workouts", async ({body}, res) => {
  const workout = await Workout.create(body);
      res.json(workout);
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.updateOne(
    { _id: req.params.id },
    { $push: { exercises: req.body }}
  )
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.aggregate(
    [
      { $addFields: {
        totalDuration: { $sum: "$exercises.duration" }
      }}
    ]
)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate(
    [
      { $addFields: {
        totalDuration: { $sum: "$exercises.duration" }
      }}
    ]
)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
