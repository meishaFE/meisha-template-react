import * as config from '@/config';
import http from '@/utils/http';
import * as types from '@/common/type';

async function login(data: types.ParamLogin) {
  const res = await http.post(config.api.account.login, data);
  return res.data;
}

async function register(data: types.ParamRegister) {
  const res = await http.post(config.api.account.register, data);
  return res.data;
}

export { login, register };

// ts是在编译时校验，对于接口返回的数据无法校验
