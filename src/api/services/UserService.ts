import { Petitioner } from '../../util/fetchClass';
import { environment } from '../constant/Enviroment';



const http = new Petitioner();
const env = environment;


export async function loginUser(email: string, password: string) {
  const inputs = {email, password};
  const data = await http.command(env.urlApi + "/Auth", inputs, "POST");
  return data;
}
                  