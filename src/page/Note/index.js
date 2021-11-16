import React, { useEffect } from "react";
import TodoCard from "../../components/NoteCard";
import { Row, Col } from "antd";
import CreateNote from "../../components/CreateNote/CreateNote";

import { useSelector, useDispatch } from "react-redux";
import { getListNote } from "../../store/actions/noteActions";

const Note = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  useEffect(() => {
    dispatch(getListNote());
  }, [dispatch]);

  return (
    <div>
      <Row>
        <Col span={24}>
          <CreateNote></CreateNote>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {notes?.map((item, index) => {
            if (!item.pin || item.storage || item.trash) return null;
            return (
              <TodoCard pinColor={"#FFD700"} key={index} note={item}></TodoCard>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {notes?.map((item, index) => {
            if (item.pin || item.storage || item.trash) return null;
            return (
              <TodoCard pinColor={"#D3D3D3"} key={index} note={item}></TodoCard>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default Note;
