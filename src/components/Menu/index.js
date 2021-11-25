import React from "react";
import { Menu } from "antd";
import {
  FileAddOutlined,
  DeleteOutlined,
  DeliveredProcedureOutlined,
} from "@ant-design/icons";
import "./style.scss";
import { Link } from "react-router-dom";

const Index = ({ collapsed }) => {
  return (
    <div className={"custom-border-menu "}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<FileAddOutlined />}>
          <Link to="/"> Ghi chú</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DeliveredProcedureOutlined />}>
          <Link to="/storage"> Lưu trữ</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DeleteOutlined />}>
          <Link to="/trash"> Thùng rác</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Index;
