const mongoose = require("mongoose");

const student = new mongoose.Schema({
  name: { type: String, default: "" },
  class: { type: String, default: "" },
  section: { type: String, default: "" },
  feePaid: { type: Boolean, default: false },
  attendencePer: { type: String, default: "" },
  roolNo: { type: String, default: "" },
});

module.exports = mongoose.model("students", student);
