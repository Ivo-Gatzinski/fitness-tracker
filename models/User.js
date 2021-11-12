const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: [
    {
      type: {
        type: String,
        enum: ["cardio", "resistance"],
        required: true,
      },
      name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 80,
      },
      duration: {
        type: Number,
        required: true,
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
