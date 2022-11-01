import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contacts from "./components/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contacts /> }  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
