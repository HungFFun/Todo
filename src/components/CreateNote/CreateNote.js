import { Button, Card, Col, Input, Popover, Row } from "antd";
import React, { useState } from "react";
import "./CreateNote.scss";
import {
  CheckSquareOutlined,
  EditOutlined,
  FileImageOutlined,
  BgColorsOutlined,
  EllipsisOutlined,
  PushpinTwoTone,
} from "@ant-design/icons";
import ColorNewNote from "./ColorNewNote/ColorNewNote";
const CreateNote = () => {
  const [isCreate, setIsCreate] = useState(true);
  const [listWork, setListWork] = useState([]);
  const [title, setTitle] = useState("");
  const [workTitle, setWorkTitle] = useState("");
  const [colorNote, setColorNote] = useState("#fff");
  const openCreate = () => {
    setIsCreate(!isCreate);
    setWorkTitle([]);
  };

  const addWorkTitle = (event) => {
    setWorkTitle(event.target.value);
  };

  const addTitle = (event) => {
    setTitle(event.target.value);
  };
  const addWorkOnList = () => {
    if (workTitle !== "") {
      setListWork([...listWork, workTitle]);
      setWorkTitle("");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addWorkOnList();
    }
  };
  const getColorNote = (ibColor) => {
    setColorNote(ibColor);
  };
  return (
    <div className={"create-note"}>
      {isCreate ? (
        <div className={"note-div"}>
          <Row className={"card-row"}>
            <Col span={18} className={"un-col"} onClick={() => openCreate()}>
              Tạo ghi chú ...
            </Col>
            <Col span={2}>
              <CheckSquareOutlined style={{ fontSize: "24px" }} />
            </Col>
            <Col span={2}>
              <EditOutlined style={{ fontSize: "24px" }} />
            </Col>
            <Col span={2}>
              <FileImageOutlined style={{ fontSize: "22px" }} />
            </Col>
          </Row>
        </div>
      ) : (
        <div>
          <Row>
            <Col span={24}>
              <Card
                title={
                  <Input
                    placeholder="Tiêu đề"
                    value={title}
                    onChange={addTitle}
                  />
                }
                className={"note-card"}
                actions={[
                  <Popover
                    content={<ColorNewNote getIbColorFuc={getColorNote} />}
                    trigger="hover"
                  >
                    <BgColorsOutlined key="setting" />
                  </Popover>,
                  <EllipsisOutlined key="ellipsis" />,
                  <Button
                    type="text"
                    danger
                    onClick={() => openCreate()}
                    style={{ width: "125px" }}
                  >
                    Đóng
                  </Button>,
                ]}
                extra={<PushpinTwoTone style={{ fontSize: "25px" }} />}
              >
                {listWork &&
                  listWork.map((work, index) => {
                    return <p key={index}>{work}</p>;
                  })}
                <Input
                  placeholder="Thêm ghi chú ..."
                  value={workTitle}
                  onChange={addWorkTitle}
                  onKeyPress={handleKeyPress}
                />
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default CreateNote;
