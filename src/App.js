import Navigationbar from "./components/Navigationbar";
import SignupPage from "./components/SignupPage";
import { AuthProvider } from "../contexts/AuthContext";
import Home from "./components/Home";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Stylesheet from "./Stylesheet";


function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Landing />;
      break;
    case "/signup":
      component = <SignupPage />;
      break;
    case "/login":
      component = <Login />;

  }

  return (
    <AuthProvider> 
    <div>
      <Navigationbar />
      <div>
        {/* <SignupPage /> */}
        {component}
      </div>
    </div>
    </AuthProvider>
  );
}

export default App;
