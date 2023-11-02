import "./App.css";
import "./styles.css";
import Editor from "./Editor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function App() {
  return <Editor />;
}

export default App;
