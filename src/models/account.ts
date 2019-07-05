import * as services from '@/service/account';
import * as types from '@/common/type';
import store from 'store';

export default {
  namespace: 'account',

  state: {
    username: '',
    sex: 0,
    age: 0,
    phone: ''
  },

  reducers: {
    save(state: object, action: types.ModelAction) {
      const data = { ...state, ...action.payload };
      store.set('account', data);
      return data;
    }
  },

  effects: {
    *login({ payload }: types.ModelAction, { call, put }: types.ModelEffects) {
      const res = yield call(services.login, payload);

      store.set('auth', res.auth);

      yield put({
        type: 'save',
        payload: res
      });
    },

    *register({ payload }: types.ModelAction, { call, put }: types.ModelEffects) {
      const res = yield call(services.register, payload);

      store.set('auth', res.auth);

      yield put({
        type: 'save',
        payload: res
      });
    }
  }
};
