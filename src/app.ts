import createLoading from 'dva-loading';

const loading = createLoading();

export const dva = {
  ...loading,

  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    }
  }
};
