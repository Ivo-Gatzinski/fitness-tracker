const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  notes: [
    {
      noteType: {
        type: String,
        enum: ["book", "product"],
        required: true,
      },
      title: {
        type: String,
        trim: true,
        required: true,
        minLength: 1,
        maxLength: 80,
      },
      body: {
        type: String,
        trim: true,
        required: true,
      },
      date: {
        type: Date,
        required: true,
        default: Date.now,
      },
      author: {
        type: String,
        trim: true,
      },
      bookTitle: {
        type: String,
        trim: true,
      },
      productName: {
        type: String,
        trim: true,
      },
      price: {
        type: Number,
        min: 0,
        default: 0,
      },
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
