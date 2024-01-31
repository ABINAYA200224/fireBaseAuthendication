

import Page from "./comonents/Home";

import Login from "./comonents/Login"
import Signup from "./comonents/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  
} from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen justify-center flex items-center  bg-[#363636]" >

        <Router>  
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="page" element={<Page/>}></Route>
            <Route path="signup" element={<Signup />}></Route>
            
            <Route path="#" element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
