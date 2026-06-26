const express = require("express");
const studentRoutes = require("../routes/students.routes");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "API de Gestion des Étudiants",
    status: "OK"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP"
  });
});

app.use("/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});