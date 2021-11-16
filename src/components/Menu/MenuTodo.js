import React from "react";
import { Menu } from "antd";
import {
  FileAddTwoTone,
  DeleteOutlined,
  DeliveredProcedureOutlined,
} from "@ant-design/icons";
import "./style.scss";
import { Link } from "react-router-dom";

const MenuTodo = () => {
  // const [collapsed, setCollapsed] = useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };
  return (
    <div className={"custom-border-menu "}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        // inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<FileAddTwoTone />}>
          <Link to="/home"> Ghi chú</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DeleteOutlined />}>
          <Link to="/Storage"> Lưu trữ</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DeliveredProcedureOutlined />}>
          <Link to="/Trash"> Thùng rác</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuTodo;
