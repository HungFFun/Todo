import React, { useEffect, useState } from "react";
import TrashCard from "../../components/TrashCard";

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
            if (!item.trash) return null;
            return (
              <TrashCard
                pinColor={"#FFD700"}
                key={index}
                note={item}
              ></TrashCard>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default Index;
