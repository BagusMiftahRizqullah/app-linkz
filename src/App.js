import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
// import SignupPage from "./screens/Signup";
import LoginScreen from "./screen/Login/LoginScreen";
import SignupScreen from "./screen/Signup/SignupScreen";
import DasboardScreen from "./screen/Dasboard/DasboardScreen";
function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Linkz App</title>
        <meta name="description" content="React application" />
      </Helmet>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/dasboard" element={<DasboardScreen />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
