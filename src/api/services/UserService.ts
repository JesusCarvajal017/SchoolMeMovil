import { USER_REGISTERED_END_POINT } from '../constant/Endpoits';
import { User } from '../types/User';

export const getRegisteredUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(USER_REGISTERED_END_POINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer TU_TOKEN' // si lo requieres
      },
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const users: User[] = await response.json();
    return users;
  } catch (error) {
    console.error('Error obteniendo usuarios registrados:', error);
    throw error;
  }
};
