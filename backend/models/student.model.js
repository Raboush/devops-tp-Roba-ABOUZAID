const students = [
  {
    id: 1,
    nom: "Alice",
    age: 20
  },
  {
    id: 2,
    nom: "Bob",
    age: 22
  }
];

const getAllStudents = () => {
  return students;
};

const getStudentById = (id) => {
  return students.find(student => student.id === Number(id));
};

module.exports = {
  getAllStudents,
  getStudentById
};