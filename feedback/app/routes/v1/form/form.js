/* Import Dependencies */
const router = require("express").Router();

/* Import Controllers */
const FormController = require("../../../controllers/form/form");

router
  .route("/form/:id")
  .post(FormController.create); 

module.exports = router;
