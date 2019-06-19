import * as services from '@/service/account';

export default {
  namespace: 'account',

  state: {
    username: '',
    sex: 0,
    age: 0,
    phone: ''
  },

  reducers: {
    save(state: any, action: any) {
      return { ...state, ...action.payload };
    }
  },

  effects: {
    *login(action: { payload: any }, effects: { call: any; put: any }) {
      const res = yield effects.call(services.login, action.payload);

      yield effects.put({
        type: 'save',
        payload: res
      });
    }
  }
};
