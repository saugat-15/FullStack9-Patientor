export interface Entry {}

export type Gender = "male" | "female";

export interface PatientData {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: string;
  entries: Entry[];
  dateOfBirth: string;
}

export type NonSensitivePatientData = Omit<PatientData, "ssn" | "entries">;
export type NewPatientData = Omit<PatientData, "id">;
