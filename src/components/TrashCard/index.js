import { React, useState } from "react";
import TodoItem from "../TodoItem";
import { Card, Tooltip } from "antd";
import { DeleteOutlined, RestOutlined } from "@ant-design/icons";
import "./style.scss";

import { useDispatch } from "react-redux";
import { deleteNote, trashNote } from "../../store/actions/noteActions";

const TodoCard = ({ note }) => {
  const [work, setWork] = useState([]);

  const dispatch = useDispatch();

  const handleDeleteNote = (idNote) => {
    deleteNote(idNote);
    dispatch({
      type: "DELETE_NOTE",
      payload: idNote,
    });
  };

  const handleTrash = (idNote) => {
    trashNote(idNote);
    dispatch({
      type: "TRASH_NOTE",
      payload: idNote,
    });
  };
  return (
    <div>
      <Card
        title={note.title}
        className={`cart-custom `}
        style={{ backgroundColor: `${note.color}` }}
        actions={[
          <Tooltip placement="top" title={"Xóa vĩnh viễn"}>
            <DeleteOutlined
              key="setting"
              onClick={() => handleDeleteNote(note._id)}
            />
          </Tooltip>,
          <Tooltip placement="top" title={"Khôi phục"}>
            <RestOutlined
              key="ellipsis"
              onClick={() => handleTrash(note._id)}
            />
          </Tooltip>,
        ]}
      >
        <div>
          <div className="item-complete">
            <TodoItem
              idNote={note._id}
              setWork={setWork}
              work={work}
            ></TodoItem>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TodoCard;
