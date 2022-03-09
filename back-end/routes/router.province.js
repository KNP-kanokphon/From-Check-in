const router = require("express").Router();
const province = require("../controllers/controller.province.js");

router.get("/", province.findAll);
router.get("/:id", province.findByid);
router.get("/geography/:id", province.findOneByGeography);
router.get("/district/:id", province.findOneByDistrict);

module.exports = router;