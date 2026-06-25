const {
  getAllStudents,
  getStudentById
} = require("../models/student.model");

const getStudents = (req, res) => {
  const students = getAllStudents();

  res.json({
    status: "OK",
    data: students
  });
};

const getStudent = (req, res) => {
  const student = getStudentById(req.params.id);

  if (!student) {
    return res.status(404).json({
      status: "ERROR",
      message: "Student not found"
    });
  }

  res.json({
    status: "OK",
    data: student
  });
};

module.exports = {
  getStudents,
  getStudent
};