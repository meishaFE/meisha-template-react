import styles from './index.less';
import React from 'react';
import * as types from '@/common/type';
import Link from 'umi/link';
import router from 'umi/router';
import { Form, Input, Button } from 'antd';
import { connect } from 'dva';
import validateRules from '@/config/validateRules';

const FormItem = Form.Item;

class Register extends React.Component<types.ComponentProps, any> {
  handleSubmit = (e: any) => {
    e.preventDefault();

    this.props.form.validateFields(async (err: any, values: object) => {
      if (!err) {
        await this.props.dispatch({ type: 'account/register', payload: values });
        router.push('/');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const loading = this.props.loading.effects['account/register'];

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>注册</h3>

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
              })(
                <Input
                  size="large"
                  type="password"
                  maxLength={16}
                  placeholder="密码"
                  autoComplete="off"
                />
              )}
            </FormItem>

            <Button className={styles.btnSubmit} htmlType="submit" type="primary" loading={loading}>
              注册
            </Button>
          </Form>
        </div>

        <Link className={styles.btnBottom} to="/login">
          登录
        </Link>
      </div>
    );
  }
}

export default connect((state: any) => ({
  loading: state.loading
}))(Form.create()(Register));
