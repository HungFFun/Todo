import React, { useState, useContext } from "react";
import "./TodoItem.scss";
import { TodoContext } from "../../contexts/TodoContext";
import { Checkbox } from "antd";

const TodoItem = (props) => {
  const { item } = props;
  const [data, setData] = useState();
  const { updateStatus } = useContext(TodoContext);
  const handleChange = (idWork) => {
    updateStatus(idWork);
  };
  React.useEffect(() => {
    if (item) {
      setData(item);
    }
  }, [item]);
  return (
    <div>
      {data &&
        data.map((item, index) => {
          return (
            <div
              className={
                item.isCompleted === true ? "complete-true" : "complete-false"
              }
              key={index}
            >
              <Checkbox
                checked={item?.isCompleted}
                onChange={() => handleChange(item._id)}
              >
                {item?.titleWork}
              </Checkbox>
            </div>
          );
        })}
    </div>
  );
};

export default TodoItem;
