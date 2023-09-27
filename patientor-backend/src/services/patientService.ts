import patientData from "../data/patients";
import { NonSensitivePatientData, NewPatientData } from "../types";
import { v4 as uuidv4 } from "uuid";

const data = patientData as NonSensitivePatientData[];

const getNonSensitivePatientData = (): NonSensitivePatientData[] => {
  return data.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return {
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    };
  });
};



const findPatientById = (id: string): NonSensitivePatientData | undefined => {
  const patient = data.find((data) => data.id === id);
  return patient;
};

const addPatient = (patient: NewPatientData): NewPatientData => {
  const newPatient = {
    id: uuidv4(),
    ...patient,
    entries: [],
  };
  patientData.push(newPatient);
  console.log(patientData);
  return newPatient;
};

export default {
  getNonSensitivePatientData,
  addPatient,
  findPatientById,
};
