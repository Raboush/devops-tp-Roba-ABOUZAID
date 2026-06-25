const express = require("express");
const router = express.Router();

const {
  getStudents,
  getStudent,
  createStudent
} = require("../controllers/students.controller");

// GET /students
router.get("/", getStudents);

// POST /students
router.post("/", createStudent);

// GET /students/:id
router.get("/:id", getStudent);

module.exports = router;