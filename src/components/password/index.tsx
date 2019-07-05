import styles from './index.less';
import React, { Component } from 'react';
import { Input } from 'antd';
import * as types from '@/common/type';

type Props = {
  value?: string;
  onBlur?: any;
  onChange?: any;
  onFocus?: any;
  placeholder: any;
};

// type PageProps = types.ComponentProps & Props;

class InputPassword extends Component<Props, any> {
  state = {
    passwordVisible: false
  };

  // 显示隐藏密码
  handlePwdVisible = () => {
    this.setState((prevState: any, props: any) => ({
      passwordVisible: !prevState.passwordVisible
    }));
  };

  render() {
    const { passwordVisible } = this.state;
    const { value, onBlur, onChange, onFocus, placeholder } = this.props;

    return (
      <div className={styles.inputPassword}>
        <Input
          value={value}
          size="large"
          type={passwordVisible ? 'text' : 'password'}
          maxLength={16}
          placeholder={placeholder}
          autoComplete="off"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        />

        <div className={styles.passwordIcon} onClick={this.handlePwdVisible}>
          <img
            style={{ display: passwordVisible ? 'none' : 'block' }}
            src={require('./images/icon_eye_close.png')}
            alt=""
          />
          <img
            style={{ display: passwordVisible ? 'block' : 'none' }}
            src={require('./images/icon_eye_open.png')}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default InputPassword;
