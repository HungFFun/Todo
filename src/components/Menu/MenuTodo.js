import React from "react";
import { Menu } from "antd";
import { FileAddTwoTone } from "@ant-design/icons";
const MenuTodo = () => {
  return (
    <div>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.ItemGroup key="g2">
          <Menu.Item icon={<FileAddTwoTone />} key="3">
            Ghi chú
          </Menu.Item>
          <Menu.Item key="4">Lời nhắc </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </div>
  );
};

export default MenuTodo;
