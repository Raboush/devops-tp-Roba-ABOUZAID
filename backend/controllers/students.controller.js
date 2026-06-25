const getStudents = (req, res) => {
  res.json({
    message: "Liste des étudiants",
    status: "OK"
  });
};

module.exports = {
  getStudents
};