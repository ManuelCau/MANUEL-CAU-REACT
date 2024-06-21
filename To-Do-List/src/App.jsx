import { useState } from "react";
import { TodoList } from "./TodoList";

function App() {
  useState(0);

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
