import patientData from "../data/patients";
import { NonSensitivePatientData } from "../types";

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

export default {
  getNonSensitivePatientData,
  addPatient,
  findPatientById,
};
