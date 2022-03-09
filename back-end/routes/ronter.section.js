const router = require("express").Router();
const section = require("../controllers/controller.section.js");

router.get("/", section.findAll);
router.post("/list", section.findByid);

module.exports = router;