import Registration from "./components/Registration";
import Logout from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protect from "./components/Protect";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Protect Component={Logout}/>} />
          <Route path="/" element={<Registration/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
