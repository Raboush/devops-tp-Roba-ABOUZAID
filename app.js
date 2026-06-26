const express = require("express"); //  Importa Express
const studentRoutes = require("./backend/routes/students.routes");

const app = express(); //  Crea la aplicación
app.use(express.json());

const PORT = process.env.PORT || 3000; // Puerto por defecto

app.get("/", (req, res) => {
  //  Ruta GET /
  res.json({
    message: "API de Gestion des Étudiants",
    status: "OK",
  });
});

app.use("/students", studentRoutes);

app.listen(PORT, () => {
  //  Arranca el servidor
  console.log(`Server running on port ${PORT}`);
});
