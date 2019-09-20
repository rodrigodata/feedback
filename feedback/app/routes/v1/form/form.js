/* Import Dependencies */
const router = require("express").Router();

/* Import Controllers */
const FormController = require("../../../controllers/form/form");

router.route("/form")
    .post(FormController.create);

router.route("/form/:id/answer")
    .get(FormController.get);

module.exports = router;
