import React, { useEffect } from "react";
import "./TodoItem.scss";
import { Checkbox } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { getWork, updateStatusWork } from "../../store/actions/work.actions";

const TodoItem = ({ item }) => {
  // const [data, setData] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.work);
  const { work } = data;
  const idNote = { idNote: item };
  useEffect(() => {
    if(idNote){
    dispatch(getWork(idNote));
    }
  }, []);
  console.log(work);
  const handleChange = (idWork) => {
    dispatch(updateStatusWork(idWork));
  };

  return (
    <div>
      {work &&
        work.map((item, index) => {
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
