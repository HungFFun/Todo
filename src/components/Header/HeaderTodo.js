import React from "react";
import "./HeaderTodo.scss";
import { Card } from "antd";
import { MenuOutlined, FileZipTwoTone } from "@ant-design/icons";
const HeaderTodo = () => {
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
      </Card>
    </div>
  );
};

export default HeaderTodo;
