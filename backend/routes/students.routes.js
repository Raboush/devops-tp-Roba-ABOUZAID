const express = require("express");

const router = express.Router();

// GET /students
router.get("/", (req, res) => {
  res.json({
    message: "Liste des étudiants",
    status: "OK"
  });
});

module.exports = router;