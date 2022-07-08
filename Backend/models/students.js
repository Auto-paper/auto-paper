const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const StudentSchema = new mongoose.Schema(
  {
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // gender: {
    //   type: String,
    //   default: "other",
    //   enum: ["other", "male", "female"],
    // },
    name: {
      first: { type: String, required: true },
      last: { type: String, required: false },
    },
    enrollment: { type: String, required: true, unique: true },
    photoUrl: {
      type: String,
      required: true,
    },
    subjectCodejs:[{
        type:String,
    }]
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", StudentSchema);
mongoose.set("useFindAndModify", false);

module.exports = Student;
