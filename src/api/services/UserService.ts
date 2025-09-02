import { LOGIN_END_POINT } from '../constant/Endpoits';

export interface LoginSuccess {
  token: string;
  // otros campos si tu API los devuelve
}

export const loginUser = async (email: string, password: string): Promise<LoginSuccess> => {
  try {
    const response = await fetch(LOGIN_END_POINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    // declaro una variable  que lee una sola vez y parsea de forma segura
    const raw = await response.text();
    let data: any = {};
    try {
      data = raw ? JSON.parse(raw) : {};
    } catch {
      data = { message: raw };
    }

    // Reglas de éxito: status OK + token presente
    if (!response.ok) {
      throw new Error(data?.message || data?.error || `Error HTTP: ${response.status}`);
    }
    if (!data?.token) {
      throw new Error(data?.message || 'Acceso denegado: token no recibido');
    }

    return data as LoginSuccess;
  } catch (error: any) {
    console.error('Error en loginUser:', error);
    throw new Error(error?.message || 'Error de autenticación');
  }
};
