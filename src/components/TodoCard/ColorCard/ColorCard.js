import { Col, Row, Tag } from "antd";
import React from "react";
import { TodoContext } from "../../../contexts/TodoContext";
import "./ColorCard.scss";

const ColorCard = (props) => {
  const idNote = props.idNote;
  const { updateBackgroundColor } = React.useContext(TodoContext);
  return (
    <div>
      <Row>
        <Col span={6} onClick={() => updateBackgroundColor(idNote, "#a7ffeb")}>
          <Tag color="#a7ffeb" className="color-custom"></Tag>
        </Col>
        <Col span={6} onClick={() => updateBackgroundColor(idNote, "#fff475")}>
          <Tag color="#fff475" className="color-custom"></Tag>
        </Col>
        <Col span={6} onClick={() => updateBackgroundColor(idNote, "#f28b82")}>
          <Tag color="#f28b82" className="color-custom"></Tag>
        </Col>
        <Col span={6} onClick={() => updateBackgroundColor(idNote, "#fbbc04")}>
          <Tag color="#fbbc04" className="color-custom"></Tag>
        </Col>
      </Row>
      <Row>
        <Col span={6} onClick={() => updateBackgroundColor(idNote, "#ccff90")}>
          <Tag color="#ccff90" className="color-custom"></Tag>
        </Col>
        <Col span={6} onClick={() => updateBackgroundColor(idNote, "#cbf0f8")}>
          <Tag color="#cbf0f8" className="color-custom"></Tag>
        </Col>
        <Col span={6} onClick={() => updateBackgroundColor(idNote, "#aecbfa")}>
          <Tag color="#aecbfa" className="color-custom"></Tag>
        </Col>
        <Col span={6} onClick={() => updateBackgroundColor(idNote, "#d7aefb")}>
          <Tag color="#d7aefb" className="color-custom"></Tag>
        </Col>
      </Row>
    </div>
  );
};

export default ColorCard;
