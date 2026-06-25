const express = require("express");
const router = express.Router();

const {
  getStudents,
  getStudent
} = require("../controllers/students.controller");

// GET /students
router.get("/", getStudents);

// GET /students/:id
router.get("/:id", getStudent);

module.exports = router;