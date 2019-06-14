import api from './api';

const env: object = {
  development: /^0.0.0.0|^127.0.0.1|^localhost|^192.168/.test(window.location.host),
  test: /^test/.test(window.location.host),
  preRelease: /^pre/.test(window.location.host),
  production: /^www/.test(window.location.host)
};
const baseUrl: string = '/';
const staticUrl: string = 'https://cdn.meishakeji.com';

export { env, api, baseUrl, staticUrl };
