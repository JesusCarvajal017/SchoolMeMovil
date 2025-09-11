// src/api/services/personService.ts
import { Petitioner } from "../../util/fetchClass";
import { environment } from "../constant/Enviroment";
import { Person } from "../types/Person";

const http = new Petitioner();
const baseUrl = environment.urlApi;

export async function getPersonById(id: number): Promise<Person> {
  return await http.querys<Person>(`${baseUrl}/Person/${id}`);
}

export async function updatePerson(id: number, data: Partial<Person>): Promise<Person> {
  return await http.command<Person>(`${baseUrl}/Person/${id}`, data, "PUT");
}
