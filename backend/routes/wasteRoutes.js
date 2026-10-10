
const express = require("express");

const {
  getCategories,
  analyzeWaste
} = require("../controllers/wasteController");

const router = express.Router();

router.get("/categories", getCategories);
router.post("/waste", analyzeWaste);

module.exports = router;
