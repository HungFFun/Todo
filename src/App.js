import { React } from "react";
import TodoCard from "./components/TodoCard";

import TodoContextProvider from "./contexts/TodoContext";
function App() {
  return (
    <div className="container">
      <TodoContextProvider>
        <TodoCard></TodoCard>
      </TodoContextProvider>
    </div>
  );
}

export default App;
