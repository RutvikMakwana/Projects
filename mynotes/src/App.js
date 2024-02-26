import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  // Function to show alerts
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    // Clear the alert after 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/login"
              element={<Login showAlert={showAlert} />}
            />
            <Route
              exact
              path="/signup"
              element={<Signup showAlert={showAlert} />}
            />
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
