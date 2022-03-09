const router = require("express").Router();
const getGeography = require("../controllers/controller.geography.js");

router.get("/", getGeography.findAll);
router.get("/:id",getGeography.findByid);

module.exports = router;