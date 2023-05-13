const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "You must provide Title"],
    trim: true,
    maxLength: [40, "Max title length should not exceed 40 Chars"],
  },
  subtitle: {
    type: String,
    required: [true, "You must provide subtitle"],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Please tell us who you are, you can use nicknames"],
    trim: true,
  },
  body: {
    type: String,
    required: [true, "You must provide body"],
    trim: true,
  },

  //   postDate: {
  //     type: Boolean,
  //     default: false,
  //   },
});

// 'Ideas' here is the collection name we are creating

const Model = mongoose.model("Ideas", TaskSchema);

module.exports = Model;
