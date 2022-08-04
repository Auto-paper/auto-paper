const router = require("express").Router();

router.post("/");

router.use("/students", require("./students"));
router.use("/subjects", require("./subjects"));
router.use("/invigilators", require("./invigilators"));

module.exports = router;
