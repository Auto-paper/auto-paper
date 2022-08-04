const router = require("express").Router();
const invigilators_controller = require("../controllers/invigilators_controller");

router.post("/login", invigilators_controller.login_invigilator);

module.exports = router;
