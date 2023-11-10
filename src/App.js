import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import NavBottom from "./components/NavBottom";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <Home />
        <NavBottom />
      </div>
    </div>
  );
}

export default App;
