import styles from './index.less';
import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
import validateRules from '@/config/validateRules';
import * as types from '@/common/type';
import router from 'umi/router';
import Link from 'umi/link';
import Password from '@/components/password';

const FormItem = Form.Item;

class Login extends React.Component<types.ComponentProps, any> {
  handleSubmit = (e: any) => {
    e.preventDefault();

    this.props.form.validateFields(async (err: any, values: object) => {
      if (!err) {
        await this.props.dispatch({ type: 'account/login', payload: values });
        router.push('/');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const loading = this.props.loading.effects['account/login'];

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>登录</h3>

          <Form className={styles.form} onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('phone', {
                rules: validateRules.phoneNo11,
                validateTrigger: 'onBlur'
              })(
                <Input
                  size="large"
                  placeholder="手机号码"
                  maxLength={11}
                  autoComplete="off"
                  type="number"
                />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('password', {
                rules: validateRules.password,
                validateTrigger: 'onBlur'
              })(<Password placeholder="密码" />)}
            </FormItem>

            <Button className={styles.btnSubmit} htmlType="submit" type="primary" loading={loading}>
              登录
            </Button>
          </Form>
        </div>

        <Link className={styles.btnBottom} to="/register">
          注册
        </Link>
      </div>
    );
  }
}

export default connect((state: any) => ({
  loading: state.loading
}))(Form.create()(Login));
