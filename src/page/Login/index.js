import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col, Image } from "antd";
import { Link } from "react-router-dom";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "./style.scss";
import { login } from "../../services/auth.service";
import { useDispatch } from "react-redux";
import { getListNote } from "../../store/actions/noteActions";
import { useAppStore } from "../../hooks";

const Index = () => {
  const [appStore, updateAppStore] = useAppStore();
  const [email, setEmail] = useState("hung@gmail.com");
  const [password, setPass] = useState("123456");

  const dispatch = useDispatch();
  const OnFinish = async (values) => {
    setEmail(values.email);
    setPass(values.password);
    await login(email, password);
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      dispatch(getListNote());
      updateAppStore((draft) => {
        draft.isLogin = true;
      });
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
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                  defaultValue="hung@gmail.com"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  defaultValue="123456"
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
