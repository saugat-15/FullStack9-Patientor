import express from "express";
import patientRouter from "./routes/patientRoute";
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 5000;

app.use(express.json());

// app.get("/api/patients", (req, res) => {
//   res.set("Access-Control-Allow-Origin", "*");
//   // res.json(patientService.getNonSensitivePatientData());
//   // console.log(res.status(200));
// });

app.use("/api/patients", patientRouter);

app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});
