// src/api/types/Person.ts
export interface Person {
  id: number;
  documentTypeId: number;
  identification: number;
  fisrtName: string;           // tal cual viene del backend (con typo)
  secondName: string | null;
  lastName: string;
  secondLastName: string | null;
  nation: string;
  phone: number;
  gender: number;
  status: number;
}
export interface UpdatePersonData {
  phone?: number;
}