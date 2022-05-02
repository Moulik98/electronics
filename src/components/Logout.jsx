
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/actions";


export const Logout = () => {
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const logout1 =()=>{
      dispatch(logout())
      navigate("/")
  }
 
  return <> <button onClick={()=>{logout1()}}>Logout</button> </>;
};