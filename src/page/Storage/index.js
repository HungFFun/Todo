import React, { useEffect } from "react";
import TodoCard from "../../components/NoteCard";
import { Row, Col } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { getListNote } from "../../store/actions/noteActions";

const Index = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  useEffect(() => {
    dispatch(getListNote());
  }, [dispatch]);

  return (
    <div>
      <Row>
        <Col span={24}>
          {notes?.map((item, index) => {
            if (!item.storage) return null;
            return (
              <TodoCard pinColor={"#FFD700"} key={index} note={item}></TodoCard>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default Index;
