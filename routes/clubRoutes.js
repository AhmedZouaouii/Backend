/**
 * @author houssemeddinesaidi <houssem.saiidi@esprit.tn>
 */

const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth.js');
const clubControllers = require("../controllers/club controller.js");

//router.use(checkAuth); // authentication check
router.get("/", clubControllers.getClub); // need authorization
router.post("/", clubControllers.addClub); // need authorization
router.put("/", clubControllers.updateClub); // need authorization
router.delete("/:id", clubControllers.deleteClub); // need authorization


module.exports = router;