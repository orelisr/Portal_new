const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
});

module.exports = Document = mongoose.model("documents", DocumentSchema);
