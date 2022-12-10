const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth.js');
const livreControllers = require("../controllers/livre controller.js");

// router.use(checkAuth); // authentication check
router.get("/", livreControllers.getLivre); // need authorization
router.post("/", livreControllers.addLivre); // need authorization
router.put("/", livreControllers.updateLivre); // need authorization
router.delete("/:id", livreControllers.deleteLivre); // need authorization

module.exports = router;