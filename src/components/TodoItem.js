import React, { useState } from "react";

import "./TodoItem.scss";

function TodoItem(props) {
  const { item } = props;
  const [data, setData] = useState(item);
  return (
    <h3
      onClick={() => setData({ ...data, isComplete: !data.isComplete })}
      className={data.isComplete && "is-complete"}
    >
      {data.title}
    </h3>
  );
}

export default TodoItem;
