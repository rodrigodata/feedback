/* Import Dependencies */
const router = require("express").Router();
const { celebrate } = require("celebrate");

/* Import Controllers */
const FeedbackController = require("../../../controllers/feedback");

/* Import Validations */
//const PaymentSchemaValidation = require("@validationsv1/Payment");

router
  .route("/feedback")
  .get(FeedbackController.get);

module.exports = router;
