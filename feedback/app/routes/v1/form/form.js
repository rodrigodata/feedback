/* Import Dependencies */
const router = require("express").Router();

/* Import Controllers */
const FormController = require("../../../controllers/form/form");

router.route("/form/:id/answer")
    .get(FormController.getFormAnswers);

router.route("/form")
    .post(FormController.createForm);

router.route("/form/:id/answer")
    .post(FormController.answerForm);

module.exports = router;
