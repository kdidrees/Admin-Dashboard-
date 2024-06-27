import "./App.css";
import Layout from "./layout/Index.jsx";
import DashBoard from "./dashboard/index.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Attendance from "./attendence/index.jsx";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<DashBoard />} />
            <Route path="/attendence" element={<Attendance />} />
           
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
