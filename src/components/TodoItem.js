import React, { useState } from "react";
import "./TodoItem.scss";

const TodoItem = (props) => {
  const { item } = props;
  const [data, setData] = useState(item);
  return (
    <div>
      <h3
        onClick={() => setData({ ...data, isComplete: !data.isComplete })}
        className={data.isComplete ? "is-complete-null" : "is-complete"}
      >
        {data.title}
      </h3>
    </div>
  );
};

export default TodoItem;
