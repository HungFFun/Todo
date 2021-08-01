import React, { useState, useContext } from "react";
import "./TodoItem.scss";
import { TodoContext } from "../../contexts/TodoContext";
import { Checkbox } from "antd";

const TodoItem = (props) => {
  const { item } = props;
  const [data, setData] = useState();
  const { updateStatus } = useContext(TodoContext);
  const handleChange = () => {
    setData({ ...data, isCompleted: !data.isCompleted });
    updateStatus(data._id);
  };
  React.useEffect(() => {
    if (item) {
      setData(item);
    }
    return () => {
      localStorage.setItem("thoat trang", "true");
    };
  }, [item]);
  return (
    <div>
      <Checkbox
        checked={data?.isCompleted}
        onChange={handleChange}
        className={data?.isCompleted ? "is-complete" : "is-complete-null"}
      >
        {data?.titleWork}
      </Checkbox>
    </div>
  );
};

export default TodoItem;
