import { useNavigate } from "react-router-dom";
import { fetchUser } from "../redux/slices/LoginSlice";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const { userInfo, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();


  if(!userInfo){
     navigate('/login')
  }

  return children
}
