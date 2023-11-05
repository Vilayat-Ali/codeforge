// lib
import {Routes, Route} from "react-router-dom";

// pages
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  )
}

export default App