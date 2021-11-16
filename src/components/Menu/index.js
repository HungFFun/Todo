import React from "react";
import { Menu } from "antd";
import {
  FileAddTwoTone,
  DeleteOutlined,
  DeliveredProcedureOutlined,
} from "@ant-design/icons";
import "./style.scss";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className={"custom-border-menu "}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.Item key="1" icon={<FileAddTwoTone />}>
          <Link to="/home"> Ghi chú</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DeliveredProcedureOutlined />}>
          <Link to="/Storage"> Lưu trữ</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DeleteOutlined />}>
          <Link to="/Trash"> Thùng rác</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default index;
