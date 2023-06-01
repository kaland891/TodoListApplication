import "./App.css";
import TodoList_body from "./components/TodoList_body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList_body />} />
      </Routes>
    </Router>
  );
}

export default App;
