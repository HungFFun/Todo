import { React, useState } from "react";
import { Layout, Card } from "antd";
import TodoItem from "./components/TodoItem";
import AddTodoItem from "./components/AddTodoItem";
function App() {
  const [data, setData] = useState([
    {
      title:
        "hocj99999999999999999999999999999999999999999999999999999999999999999999999",
      isCompleted: true,
    },
    { title: "ngur", isCompleted: false },
    { title: "nghir", isCompleted: true },
  ]);
  const addTodoInArr = (title) => {
    const newTodo = [...data, { title: title }];
    setData(newTodo);
  };
  return (
    <Layout.Content className="container">
      <Card
        extra={<AddTodoItem addTodoFunc={addTodoInArr}></AddTodoItem>}
        className="cart-custom"
      >
        {data.length > 0 &&
          data.map((item, index) => (
            <div key={index}>
              <TodoItem item={item}></TodoItem>
            </div>
          ))}
        {data.length === 0 && (
          <div>
            <h1> Không có phần tử </h1>
          </div>
        )}
      </Card>
    </Layout.Content>
  );
}

export default App;
