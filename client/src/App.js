import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/char/:char_id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
