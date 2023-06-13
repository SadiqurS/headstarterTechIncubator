import Navigationbar from "./components/Navigationbar";
import SignupPage from "./components/SignupPage";
import Home from "./components/Home";
import Login from "./components/Login";
import Landing from "./components/Landing";
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
    <div>
      <Navigationbar />
      <div>
        {/* <SignupPage /> */}
        {component}
      </div>
    </div>
  );
}

export default App;
