import React, { useEffect } from "react";
import "./style.scss";
import { Checkbox, Col, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import {
  getWork,
  updateStatusWork,
  removeWork,
} from "../../store/actions/workActions";

const TodoItem = ({ idNote, work, setWork }) => {
  useEffect(() => {
    if (idNote) {
      getWork(idNote).then((res) => setWork(res));
    }
  }, []);

  const handleChange = (idWork) => {
    work.filter(function (item) {
      if (item._id === idWork) {
        item.isCompleted = !item.isCompleted;
        setWork([...work]);
        updateStatusWork(idWork);
      }
      return null;
    });
  };
  const handleRemove = (idWork) => {
    const index = work.findIndex((item) => item._id === idWork);
    if (index < 0) return;
    const newList = [...work];
    newList.splice(index, 1);
    removeWork(idWork);
    setWork(newList);
  };

  return (
    <div>
      {work &&
        work.map((item, index) => {
          return (
            <div key={index}>
              <Row className="row-item">
                <Col span={20}>
                  <Checkbox
                    checked={item?.isCompleted}
                    onChange={() => handleChange(item._id)}
                  >
                    {item?.titleWork}
                  </Checkbox>
                </Col>
                <Col span={4}>
                  <div className="icon-remove">
                    <CloseOutlined onClick={() => handleRemove(item._id)} />
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}
    </div>
  );
};

export default TodoItem;
