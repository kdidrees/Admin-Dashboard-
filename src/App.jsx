import "./App.css";
import Layout from "./layout/Index.jsx";
import DashBoard from "./dashboard/index.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Attendance from "./attendence/index.jsx";
import LoginForm from "./login/Login.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<DashBoard />} />
            <Route path="/attendence" element={<Attendance />} />
          </Route>
          <Route path="/login" element={<LoginForm />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
