const Invigilator = require("../models/invigilators");

module.exports.login_invigilator = async (req, res) => {
  try {
    const user = await Invigilator.findByCredentials(
      req.body.username,
      req.body.password
    );
    if (user) {
      const token = await Invigilator.genrateAuthToken();
      return res.send({
        success: true,
        message: "User Sign In Successfully",
        token,
      });
    }
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
};
