import { Button, Card, Col, Input, Popover, Row } from "antd";
import React, { useState } from "react";
import "./CreateNote.scss";
import {
  CheckSquareOutlined,
  EditOutlined,
  FileImageOutlined,
  BgColorsOutlined,
  PushpinTwoTone,
} from "@ant-design/icons";
import ColorNewNote from "./ColorNewNote/ColorNewNote";
import { createNewNote, getListNote } from "../../store/actions/noteActions";
import { useDispatch } from "react-redux";
const CreateNote = () => {
  const [isCreate, setIsCreate] = useState(true);
  const [listWork, setListWork] = useState([]);
  const [title, setTitle] = useState("");
  const [workTitle, setWorkTitle] = useState("");
  const [colorNote, setColorNote] = useState("#fff");
  const dispatch = useDispatch();
  const [colorPin, setColorPin] = useState("#D3D3D3");
  const [pin, setPin] = useState(false);

  const openCreate = () => {
    if (listWork.length > 0) {
      createNewNote(title, listWork, colorNote, pin).then((res) => {
        setIsCreate(!isCreate);
        setListWork([]);
        setTitle("");
        dispatch(getListNote());
      });
    } else {
      setIsCreate(!isCreate);
      setListWork([]);
      setTitle("");
    }
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

  const handleChangePin = () => {
    if (colorPin === "#D3D3D3") {
      setColorPin("#FFD700");
      setPin(!pin);
    } else {
      setColorPin("#D3D3D3");
      setPin(!pin);
    }
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
                    style={{ backgroundColor: `${colorNote}` }}
                  />
                }
                style={{ backgroundColor: `${colorNote}` }}
                className={"note-card"}
                actions={[
                  <Popover
                    content={<ColorNewNote getIbColorFuc={getColorNote} />}
                    trigger="hover"
                  >
                    <BgColorsOutlined key="setting" />
                  </Popover>,
                  <Button
                    type="text"
                    danger
                    onClick={() => openCreate()}
                    style={{ width: "125px" }}
                  >
                    Đóng
                  </Button>,
                ]}
                // icon pin
                extra={
                  <PushpinTwoTone
                    twoToneColor={colorPin}
                    style={{ fontSize: "25px" }}
                    onClick={() => handleChangePin()}
                  />
                }
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
