import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
function App() {
  const data = [
    { title: "hocj", isCompleted: true },
    { title: "ngur", isCompleted: false },
    { title: "nghir", isCompleted: true },
  ];
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
