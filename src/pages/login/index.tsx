import styles from './index.less';
import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
import validateRules from '@/config/validateRules';

const FormItem = Form.Item;

interface IProps {
  form: any;
  dispatch: any;
}

class Login extends React.Component<IProps, any> {
  handleSubmit = (e: any) => {
    e.preventDefault();

    this.props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        this.props.dispatch({ type: 'account/login', payload: values });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

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

            <Button className={styles.btnSubmit} htmlType="submit" type="primary">
              登录
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect((state: any) => ({
  loading: state.loading
}))(Form.create()(Login));
