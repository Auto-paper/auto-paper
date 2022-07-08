const mongoose = require("mongoose");

const SheetsSchema = mongoose.Schema({
  code: { type: String, required: true, unique: true },
  //   location: {
  //     address: { type: String },
  //     city: { type: String },
  //     district: { type: String },
  //     state: { type: String },
  //     pinCode: { type: String },
  //   },
  marks: { type: Number, default: 0 },
  type: { type: String, default: "main", enum: ["main", "extra"] },
  extras: [{ type: String, unique: true }],
});

const Sheet = mongoose.model("Sheet", SheetsSchema);

module.exports = Sheet;
