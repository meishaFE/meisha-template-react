import { delay } from '../src/utils/utils';

const proxy = {
  'POST /api/user/checkAuth': async (req, res) => {
    await delay(1000);
    if (Math.random() > 0.5) {
      res.send({
        code: -1001,
        msg: '未登录'
      });
    } else {
      res.send({
        code: 0,
        msg: 'ok',
        data: {
          auth: '',
          username: 'qiu',
          sex: 1,
          age: '20',
          phone: '18720989381'
        }
      });
    }
  },

  'POST /api/user/login': async (req, res) => {
    await delay(1000);
    res.send({
      code: 0,
      msg: 'ok',
      data: {
        auth: 'testAuth',
        username: 'qiu',
        sex: 1,
        age: '20',
        phone: '18720989381'
      }
    });
  },

  'POST /api/user/register': async (req, res) => {
    await delay(1000);
    res.send({
      code: 0,
      msg: 'ok',
      data: {
        auth: 'testAuth',
        username: 'qiu',
        sex: 1,
        age: '20',
        phone: '18720989381'
      }
    });
  }
};

export default proxy;
