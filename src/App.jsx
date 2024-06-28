import "./App.css";
import Layout from "./layout/Index.jsx";
import DashBoard from "./dashboard/index.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./login/Login.jsx";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./redux/slices/LoginSlice.js";
import { useEffect } from "react";
import ProtectedRoute from "./protectedroute/ProtectedRoute.js";
import AllProperty from "./allproperty/AllProperty.jsx";
import EditProperty from "./editproperty/EditProperty.jsx";

function App() {
  const dispatch = useDispatch();
  const { userInfo, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userInfo) {
      dispatch(fetchUser());
    }
  }, [dispatch, userInfo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<DashBoard />} />
            <Route path="/all-properties" element={<AllProperty/>} />
            <Route path="/edit-property/:id" element={<EditProperty/>} />
          </Route>

          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
