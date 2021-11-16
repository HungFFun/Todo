import React from "react";
import { Form, Input, Button, Checkbox, Row, Col, Image } from "antd";
import { Link, useHistory } from "react-router-dom";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "./style.scss";
import { login } from "../../services/auth.service";
const Index = () => {
  const history = useHistory();

  const OnFinish = (values) => {
    if (values) {
      login(values.email, values.password);
      history.push("/home");
    }
  };

  return (
    <div className="divStyle">
      <div className="login-form">
        <Row>
          <Col span={12} className="img-center">
            <Image src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" />
          </Col>
          <Col span={12}>
            <Form
              name="normal_login"
              className="form-input"
              initialValues={{
                remember: true,
              }}
              onFinish={OnFinish}
            >
              <h2 className="h2-style">LOGIN</h2>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot">Forgot password</a>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <span className="aStyle">Or</span>
                <Link to="/register">register now!</Link>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Index;
