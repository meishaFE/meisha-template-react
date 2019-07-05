import createLoading from 'dva-loading';
import { checkAuth } from '@/service/checkAuth';

const loading = createLoading();

export const dva = {
  ...loading,

  config: {
    onError(err: any) {
      // err.preventDefault();
      // console.error(err.message);
      console.log('2333');
      alert(err.msg);
    }
  }
};

export async function render(oldRender: any) {
  await checkAuth();
  oldRender();
}
