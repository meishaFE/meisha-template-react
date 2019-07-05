import axios from 'axios';
import URLSearchParams from 'url-search-params';
import typeDetect from 'type-detect';
import store from 'store';
import md5 from 'md5';
import router from 'umi/router';
import { baseUrl } from '../config/index';

const options: object = {
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [
    (data: any, headers: any) => {
      if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        const params = new URLSearchParams();

        if (!data) data = '';
        const timestamp = parseInt((new Date().getTime() / 1000).toString());
        const sign = md5(JSON.stringify(data) + timestamp);
        params.append('timestamp', timestamp.toString());
        params.append('sign', sign);
        params.append('data', JSON.stringify(data));

        return params;
      } else {
        // 其他类型
        return data;
      }
    }
  ],
  withCredentials: true,
  timeout: 5 * 60 * 1000
};

const $http = axios.create(options);

$http.interceptors.request.use(config => {
  config.headers['auth'] = store.get('auth') || '';
  return config;
});

$http.interceptors.response.use(
  res => {
    // 处理响应为空的情况
    if (
      !res ||
      !res.data ||
      !(typeDetect(res.data) === 'Object' || typeDetect(res.data) === 'Array')
    ) {
      return Promise.reject(new Error('response is empty'));
    }

    // 未登录情况
    else if (res.data.code === -1001) {
      store.clearAll();
      router.push('/login');
    }

    // 后端返回的 code 不为 0 的情况
    else if (res.data.code !== 0) {
      return Promise.reject(res.data);
    }

    // 正常返回
    else {
      return res.data;
    }
  },
  err => {
    return Promise.reject(err);
  }
);

export default $http;
