const router = require("express").Router();
const getchoce = require("../controllers/controller.getchoce.js");

router.get("/", getchoce.findAll);

module.exports = router;