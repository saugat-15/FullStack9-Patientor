import axios from "axios";
import { useEffect, useState } from "react";
import { apiBaseUrl } from "../../constants";
import { useParams } from "react-router-dom";

export interface PatientProps {
  id: string;
}

interface PatientData {
  dateOfBirth: string;
  entries: [];
  gender: "male" | "female";
  id: string;
  name: string;
  occupation: string;
  ssn: string;
}

const IndividualPatientData = () => {
  const { id } = useParams<{ id: string }>();
  const [patientData, setPatientData] = useState<PatientData>();
  const singlePatientDetail = async () => {
    const response = await axios.get(`${apiBaseUrl}/patients/${id}`);
    const data = await response.data;
    console.log(data);
    setPatientData(data);
  };

  useEffect(() => {
    singlePatientDetail();
    // console.log(patientData);
  }, []);
  //   console.log(patientId);
  return (
    <>
      <h3>{patientData?.name}</h3>
      <p>{patientData?.ssn}</p>
      <p>Occupation: {patientData?.occupation}</p>
    </>
  );
};

export default IndividualPatientData;
