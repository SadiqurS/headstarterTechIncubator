import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigationbar from "./components/Navigationbar";
import SignupPage from "./components/SignupPage";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <AuthProvider> 
    <div>
      <Navigationbar />
      <div>
        <SignupPage />
      </div>
    </div>
    </AuthProvider>
  );
}

export default App;
