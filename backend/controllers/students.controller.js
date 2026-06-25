const { getAllStudents } = require("../models/student.model");

const getStudents = (req, res) => {
  const students = getAllStudents();

  res.json({
    status: "OK",
    data: students
  });
};

module.exports = {
  getStudents
};