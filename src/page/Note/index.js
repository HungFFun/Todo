import React, { useEffect, useState } from "react";
import NoteCard from "../../components/NoteCard";
import CreateNote from "../../components/CreateNote/CreateNote";

import { useSelector, useDispatch } from "react-redux";
import { getListNote } from "../../store/actions/noteActions";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Col, Row } from "antd";
const Note = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  const [destinationIndex, setDestinationIndex] = useState();
  useEffect(() => {
    dispatch(getListNote());
  }, [dispatch]);

  const allNote = notes?.map((item, i) => {
    if (!item.pin || item.storage || item.trash) return null;
    return (
      <Draggable
        draggableId={`draggable-${i}`}
        key={`draggable-${i}`}
        index={i}
      >
        {(provided) => (
          <Col
            span={4}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <NoteCard pinColor={"#FFD700"} key={i} note={item}></NoteCard>
          </Col>
        )}
      </Draggable>
    );
  });
  const dragEnd = (result) => {
    if (result.destination === null) {
      setDestinationIndex(result.source.index);
    } else {
      setDestinationIndex(result.destination.index);
    }
    const productsItem = [...notes];
    const [orderedProducts] = productsItem.splice(result.source.index, 1);
    productsItem.splice(destinationIndex, 0, orderedProducts);
    dispatch({
      type: "CHANGE_LOCATION",
      payload: productsItem,
    });
  };
  return (
    <div>
      <Row>
        <Col span={24}>
          <CreateNote></CreateNote>
        </Col>
      </Row>
      <DragDropContext onDragEnd={dragEnd}>
        <Droppable
          droppableId="productsSequence"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <Row
              className="my-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {allNote}
              {provided.placeholder}
            </Row>
          )}
        </Droppable>
      </DragDropContext>
      <Row>
        <Col span={24}>
          {notes?.map((item, index) => {
            if (item.pin || item.storage || item.trash) return null;
            return (
              <NoteCard pinColor={"#D3D3D3"} key={index} note={item}></NoteCard>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default Note;
