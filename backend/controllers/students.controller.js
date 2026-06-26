const {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../models/student.model");

const getStudents = (req, res) => {
  const students = getAllStudents();

  res.json({
    status: "OK",
    data: students,
  });
};

const getStudent = (req, res) => {
  const student = getStudentById(req.params.id);

  if (!student) {
    return res.status(404).json({
      status: "ERROR",
      message: "Student not found",
    });
  }

  res.json({
    status: "OK",
    data: student,
  });
};

const createStudent = (req, res) => {
  const { nom, age } = req.body;

  const newStudent = {
    id: getAllStudents().length + 1,
    nom,
    age,
  };

  addStudent(newStudent);

  res.status(201).json({
    status: "OK",
    data: newStudent,
  });
};

const editStudent = (req, res) => {
  const updatedStudent = updateStudent(req.params.id, req.body);

  if (!updatedStudent) {
    return res.status(404).json({
      status: "ERROR",
      message: "Student not found",
    });
  }

  res.json({
    status: "OK",
    data: updatedStudent,
  });
};

const removeStudent = (req, res) => {
  const deletedStudent = deleteStudent(req.params.id);

  if (!deletedStudent) {
    return res.status(404).json({
      status: "ERROR",
      message: "Student not found",
    });
  }

  res.json({
    status: "OK",
    data: deletedStudent,
  });
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  editStudent,
  removeStudent,
};
