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

const addStudent = (student) => {
    students.push(student);
    return student;
};

const updateStudent = (id, updatedData) => {
  const student = students.find(student => student.id === Number(id));

  if (!student) {
    return null;
  }

  student.nom = updatedData.nom;
  student.age = updatedData.age;

  return student;
};

const deleteStudent = (id) => {
  const index = students.findIndex(student => student.id === Number(id));

  if (index === -1) {
    return null;
  }

  return students.splice(index, 1)[0];
};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent
};