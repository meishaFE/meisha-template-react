export default {
  phoneNo11: [
    { required: true, message: '请输入手机号码' },
    { pattern: /^\d{11}$/, message: '手机号码不符合规范' }
  ],
  password: [
    { required: true, message: '请输入密码' },
    {
      pattern: /^[a-zA-Z0-9\.`~!@#\$%^&*\(\)-_=+,<.>?\/\|]{6,16}$/,
      message: '请使用数字、字母或符号设置6-16位的密码'
    }
  ]
};
