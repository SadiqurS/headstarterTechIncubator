import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigationbar from "./components/Navigationbar";
import SignupPage from "./components/SignupPage";

function App() {
  return (
    <div>
      <Navigationbar />
      <div>
        <SignupPage />
      </div>
    </div>
  );
}

export default App;
