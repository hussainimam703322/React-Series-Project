import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cardmain from "./components/Cardmain";
import Navbar from "./components/Navbar";
function App(props) {
  const [count, setCount] = useState(0);
  let myObj = {
    username : ''
  }
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col mt-4">
      <Cardmain username='Rukhsar' /> 
      <Cardmain username='Pari'/> 
      <Cardmain  username='Mehwish'/> 
      </div>
    </div>
    
  );
}

export default App;
