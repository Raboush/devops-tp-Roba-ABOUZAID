const express = require("express");
const router = express.Router();

const {
  getStudents,
  getStudent,
  createStudent,
  editStudent,
  removeStudent,
} = require("../controllers/students.controller");

// GET /students
router.get("/", getStudents);

// POST /students
router.post("/", createStudent);

// PUT /students/:id
router.put("/:id", editStudent);

// DELETE /students/:id
router.delete("/:id", removeStudent);

// GET /students/:id
router.get("/:id", getStudent);

module.exports = router;
