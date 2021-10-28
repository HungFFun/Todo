import { Col, Row, Tag } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { updateBackgroundColor } from "../../../store/actions/noteActions";
import "./ColorCard.scss";

const ColorCard = ({ idNote }) => {
  // const { updateBackgroundColor } = React.useContext(TodoContext);

  const dispatch = useDispatch();

  const updateBackground = (idNote, color) => {
    dispatch(updateBackgroundColor(idNote, color));
  };

  return (
    <div>
      <Row>
        <Col span={6} onClick={() => updateBackground(idNote, "#a7ffeb")}>
          <Tag color="#a7ffeb" className="color-custom"></Tag>
        </Col>
        <Col span={6} onClick={() => updateBackground(idNote, "#fff475")}>
          <Tag color="#fff475" className="color-custom"></Tag>
        </Col>
        <Col span={6} onClick={() => updateBackground(idNote, "#f28b82")}>
          <Tag color="#f28b82" className="color-custom"></Tag>
        </Col>
        <Col span={6} onClick={() => updateBackground(idNote, "#fbbc04")}>
          <Tag color="#fbbc04" className="color-custom"></Tag>
        </Col>
      </Row>
      <Row>
        <Col span={6} onClick={() => updateBackground(idNote, "#ccff90")}>
          <Tag color="#ccff90" className="color-custom"></Tag>
        </Col>
        <Col span={6} onClick={() => updateBackground(idNote, "#cbf0f8")}>
          <Tag color="#cbf0f8" className="color-custom"></Tag>
        </Col>
        <Col span={6} onClick={() => updateBackground(idNote, "#aecbfa")}>
          <Tag color="#aecbfa" className="color-custom"></Tag>
        </Col>
        <Col span={6} onClick={() => updateBackground(idNote, "#fff")}>
          <Tag color="#fff" className="color-custom"></Tag>
        </Col>
      </Row>
    </div>
  );
};

export default ColorCard;
