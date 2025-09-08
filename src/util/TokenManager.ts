import { jwtDecode } from "jwt-decode";


type JWTPayload = {
  exp: number; // Unix time en segundos
  [key: string]: any;
};

let logoutTimer: NodeJS.Timeout | null = null;

/**
 * Programa el cierre de sesión cuando el token expire
 */
export function manejarToken(token: string, onLogout: () => void) {
  try {
    const decoded = jwtDecode<JWTPayload>(token);
    const exp = decoded.exp;
    const segundosRestantes = exp - Math.floor(Date.now() / 1000);

    if (segundosRestantes <= 0) {
      onLogout();
      return;
    }

    if (logoutTimer) clearTimeout(logoutTimer);

    logoutTimer = setTimeout(() => {
      onLogout();
    }, segundosRestantes * 1000);
  } catch (error) {
    console.error('Error al manejar token:', error);
    onLogout();
  }
}

/**
 * Valida si el token sigue vigente
 */
export function tokenValido(token: string): boolean {
  try {
    const { exp } = jwtDecode<JWTPayload>(token);
    return exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}
