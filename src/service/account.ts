import * as config from '@/config';
import http from '@/utils/http';

interface parameterLogin {
  phone: string;
  password: string;
}
interface returnsLogin {
  username: string;
  sex: number;
  age: number;
  phone: string;
}
async function login(data: parameterLogin): Promise<returnsLogin> {
  const res = await http.post(config.api.account.login, data);
  return res.data;
}

login({ phone: '233', password: '11' });

export { login };
