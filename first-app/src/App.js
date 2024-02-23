import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // State for managing theme mode and alerts
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // Function to show alerts
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    // Clear the alert after 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    // Set background color based on mode
    document.body.style.backgroundColor =
      newMode === "dark" ? "#041023" : "white";
    // Show alert for mode change
    showAlert(
      newMode === "dark" ? "Dark mode is on!" : "Light mode is on!",
      "success"
    );
  };

  return (
    <Router>
      <>
        {/* Navbar component with title and mode toggle button */}
        <Navbar title="FirstApp" mode={mode} toggleMode={toggleMode} />
        {/* Alert component to display messages */}
        <Alert alert={alert} />
        <Routes>
          {/* Route for the form component */}
          <Route
            path="/"
            element={<Form mode={mode} showAlert={showAlert} />}
          />
          {/* Route for the about page */}
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
