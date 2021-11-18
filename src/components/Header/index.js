import React from "react";
import "./style.scss";
import { Avatar, Card, Dropdown, Menu } from "antd";
import { MenuOutlined, FileZipTwoTone } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { logout } from "../../services/auth.service";
import { useHistory } from "react-router";
const Index = () => {
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  };
  return (
    <div className="header-custom">
      <Card>
        <MenuOutlined
          style={{
            fontSize: "20px",
            marginRight: "20px",
            marginLeft: "15px",
          }}
        />
        <FileZipTwoTone twoToneColor="#FFCC00" style={{ fontSize: "40px" }} />
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item
                key="1"
                icon={<UserOutlined />}
                onClick={() => handleLogout()}
              >
                Đăng xuất
              </Menu.Item>
            </Menu>
          }
          placement="bottomCenter"
        >
          <Avatar
            style={{
              backgroundColor: "#87d068",
              float: "right",
              marginTop: "5px",
              marginRight: "50px",
            }}
            icon={<UserOutlined />}
          />
        </Dropdown>
      </Card>
    </div>
  );
};

export default Index;
