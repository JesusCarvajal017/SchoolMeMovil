export interface User {
  id: number;
  email: string;
  password: string;
  personId: number; // clave para pedir la Person
  photo: string;    // nombre de archivo en backend (e.g., "defaul.jpg")
  status: number;
}
// Tipos para formularios de actualización
export interface UpdateUserData {
  email?: string;
  password?: string;
  phone?: number;
}