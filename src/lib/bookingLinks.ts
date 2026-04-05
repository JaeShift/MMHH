export const OPTIMANTRA_NEW_PATIENT_URL =
  process.env.NEXT_PUBLIC_OPTIMANTRA_NEW_PATIENT_URL ||
  "https://www.optimantra.com/optimus/patient/patientaccess/prospects?pid=RDVCR1VrMHlXZjN5VDlTU1p2UmpKdz09";

export const OPTIMANTRA_EXISTING_PATIENT_URL =
  process.env.NEXT_PUBLIC_OPTIMANTRA_EXISTING_PATIENT_URL ||
  "https://www.optimantra.com/optimus/om/patient/login?accessPoint=L2J1ZDFJanZ0MW41MTZOVFpIa1Zkdz09";

export const hasExistingPatientPortal = Boolean(OPTIMANTRA_EXISTING_PATIENT_URL);
