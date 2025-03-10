import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
