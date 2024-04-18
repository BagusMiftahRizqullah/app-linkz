import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignupPage from "./screens/Signup";
import LoginScreen from "./screen/Login/LoginScreen";
import SignupScreen from "./screen/Signup/SignupScreen";
import DasboardScreen from "./screen/Dasboard/DasboardScreen";
function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/Dasboard" element={<DasboardScreen />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
