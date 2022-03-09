const router = require("express").Router();
const getDistrict = require("../controllers/controller.district.js");

router.get("/", getDistrict.findAll);
router.get("/:id", getDistrict.findById);
// router.get("/:id", auth(), getGeography.findByCode);

module.exports = router;