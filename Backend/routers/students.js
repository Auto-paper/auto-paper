const router = require("express").Router();
const students_controller = require("../controllers/students_controller");

router.get("/", students_controller.uploadStudents);

module.exports = router;
