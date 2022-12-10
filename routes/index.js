const express = require("express");
const router = express.Router();

//router.use("/login", require("./login.js"));
//router.use("/signup", require("./signup.js"));
router.use("/lists", require("./lists.js"));
router.use("/lists", require("./workspace/listsPost.js"));
router.use("/lists", require("./workspace/listsGet.js"));
//router.use("/lists", require("./listsUpdateDelete.js"));

router.get("/", (req, res) => {
  res.send("Server: api");
});

module.exports = router;
