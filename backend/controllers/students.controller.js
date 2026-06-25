const {
  getAllStudents,
  getStudentById,
  addStudent
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

const createStudent = (req, res) => {
  const { nom, age } = req.body;

  const newStudent = {
    id: getAllStudents().length + 1,
    nom,
    age
  };

  addStudent(newStudent);

  res.status(201).json({
    status: "OK",
    data: newStudent
  });
};

module.exports = {
  getStudents,
  getStudent,
  createStudent
};