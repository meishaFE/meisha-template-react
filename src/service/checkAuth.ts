import * as config from '@/config';
import http from '@/utils/http';
import store from 'store';

async function checkAuth() {
  const auth = store.get('auth');

  if (!auth) {
    store.clearAll();
    return;
  }

  try {
    const res = await http.post(config.api.account.checkAuth);

    if (res && res.data) {
      store.set('account', res.data);
    }
  } catch (err) {
    console.log(err);
  }
}

export { checkAuth };
