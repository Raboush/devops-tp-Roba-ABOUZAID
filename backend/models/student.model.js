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

module.exports = {
  getAllStudents
};