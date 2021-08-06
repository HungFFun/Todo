import { Col, Row, Tag } from "antd";
import React from "react";
import "./ColorNewNote.scss";
import PropTypes from "prop-types";

const ColorNewNote = (props) => {
  const ibColorNote = props.getIbColorFuc;
  const getIpColor = (ibColor) => {
    ibColorNote(ibColor);
  };
  return (
    <div>
      <Row>
        <Col span={6} onClick={() => getIpColor("#a7ffeb")}>
          <Tag color="#a7ffeb" className="color-card-new"></Tag>
        </Col>
        <Col span={6} onClick={() => getIpColor("#fff475")}>
          <Tag color="#fff475" className="color-card-new"></Tag>
        </Col>
        <Col span={6} onClick={() => getIpColor("#f28b82")}>
          <Tag color="#f28b82" className="color-card-new"></Tag>
        </Col>
        <Col span={6} onClick={() => getIpColor("#fbbc04")}>
          <Tag color="#fbbc04" className="color-card-new"></Tag>
        </Col>
      </Row>
      <Row>
        <Col span={6} onClick={() => getIpColor("#ccff90")}>
          <Tag color="#ccff90" className="color-card-new"></Tag>
        </Col>
        <Col span={6} onClick={() => getIpColor("#cbf0f8")}>
          <Tag color="#cbf0f8" className="color-card-new"></Tag>
        </Col>
        <Col span={6} onClick={() => getIpColor("#aecbfa")}>
          <Tag color="#aecbfa" className="color-card-new"></Tag>
        </Col>
        <Col span={6} onClick={() => getIpColor("#fff")}>
          <Tag color="#fff" className="color-card-new"></Tag>
        </Col>
      </Row>
    </div>
  );
};

ColorNewNote.propTypes = {
  getIbColorFuc: PropTypes.func.isRequired,
};

export default ColorNewNote;
