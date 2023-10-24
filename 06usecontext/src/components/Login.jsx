import UserContext from "../context/UserContext";
import React,{useState,useContext} from "react";

const Login = () => {
  const [username,Setusername] = useState('')
  const [password,Setpassword] = useState('')

  const {Setuser} = useContext(UserContext);// input lega

  const handlesubmit = (e) =>{
    e.preventDefault() 
    Setuser({username,password})
  }
  return (
    <div>
        <h2>Login</h2>

        <input type="text" placeholder="username" 
        value={username}
        onChange={(e) => Setusername(e.target.value)}/>

        <input type="text" placeholder="username"
        value={password}
        onChange={(e) => Setpassword(e.target.value)} />

        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}
export default Login