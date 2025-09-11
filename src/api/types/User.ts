export interface User {
  id: number;
  email: string;
  password: string;
  personId: number; // clave para pedir la Person
  photo: string;    // nombre de archivo en backend (e.g., "defaul.jpg")
  status: number;
}