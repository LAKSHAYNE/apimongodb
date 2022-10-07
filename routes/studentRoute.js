const express = require("express");

const studentController = require("../controllers/studentController");
const router = express.Router();
router.post("/insert", studentController.insert);
router.post("/update", studentController.updatestu);
router.get("/delete", studentController.deletestu);
module.exports = router;
