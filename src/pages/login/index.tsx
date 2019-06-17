import styles from './index.less';
import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Select, Row } from 'antd';

const FormItem = Form.Item;

interface IProps {
  form: any;
}

class Login extends React.Component<IProps, any> {
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>登录</h3>

          <Form className={styles.form}>
            <FormItem>
              {getFieldDecorator('phone', { rules: phoneRule, validateTrigger: 'onBlur' })(
                <Input
                  size="large"
                  placeholder="手机号码"
                  maxLength={phoneLength}
                  autoComplete="off"
                  type="number"
                  onFocus={() => {
                    $utils.screenCenter();
                  }}
                />
              )}
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect((state: any) => ({
  loading: state.loading
}))(Form.create()(Login));
