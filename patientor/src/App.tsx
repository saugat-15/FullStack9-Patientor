import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Button, Divider, Container, Typography } from "@mui/material";

import { apiBaseUrl } from "./constants";
import { Patient } from "./types";

import patientService from "./services/patients";
import PatientListPage from "./components/PatientListPage";
import IndividualPatientData from "./components/PatientListPage/IndividualPatientData";
// let patientId = "";

// export const fetchPatientDetails = (id: string) => {
//   patientId = id;
// };

const App = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    // void axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      const patients = await patientService.getAll();
      setPatients(patients);
    };
    void fetchPatientList();
  }, [patients]);

  return (
    <div className="App">
      <Container>
        <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
          Patientor
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary">
          Home
        </Button>
        <Divider hidden />
        <Routes>
          <Route
            path="/"
            element={
              <PatientListPage patients={patients} setPatients={setPatients} />
            }
          />

          <Route path={`/patients/:id`} element={<IndividualPatientData />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
