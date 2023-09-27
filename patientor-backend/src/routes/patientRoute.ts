import express from "express";
import patientService from "../services/patientService";

const patientRouter = express.Router();

patientRouter.get("/", (req, res) => {
  // res.set("Access-Control-Allow-Origin", "*");
  res.send(patientService.getNonSensitivePatientData());
});

patientRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(patientService.findPatientById(id));
});

patientRouter.post("/", (req, res) => {
  // res.set("Access-Control-Allow-Origin", "*");
  const data = req.body;
  patientService.addPatient(data);
  res.json(`user added to the DB`);
});

export default patientRouter;
