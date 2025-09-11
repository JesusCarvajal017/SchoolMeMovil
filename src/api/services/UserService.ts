// src/api/services/userService.ts
import { Petitioner } from '../../util/fetchClass';
import { environment } from '../constant/Enviroment';
import { User } from '../types/User';

const http = new Petitioner();
const baseUrl = environment.urlApi;

export interface LoginResponse {
  token: string;
  expiracion: string;
}

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
  const payload = { email, password };
  return await http.command<LoginResponse>(`${baseUrl}/Auth`, payload, "POST");
}

export async function getAllUsers(): Promise<User[]> {
  return await http.querys<User[]>(`${baseUrl}/User`);
}
