/* Import Dependencies */
const router = require("express").Router();

/* Payment Route */
router.use("/", require("./feedback"));
router.use("/", require("./form"));

module.exports = router;
