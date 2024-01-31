import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { signInWithEmailAndPassword} from "firebase/auth";
import Lable from "./Lable";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleValues = (e) => {
    if (e.target.name === "email") {
      setValues((prev) => ({ ...prev, email: e.target.value }));
    } else {
      setValues((prev) => ({ ...prev, password: e.target.value }));
    }
  };
  console.log(values, "values");

  const [error, setError] = useState("");
  const [err, setErr] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();
    if (!values.email) {
      setErr("Enter the Email");
    } else if (!values.email.includes("@")) {
      setErr("Please enter the valid email");
    } else {
      setErr("");
    }



    if (!values.password) {
      setError("Enter the password ");
    } else if (
      values.password.length < 6

    ) {
      setError("Passwords should be at least 6 characters long");
    }
   
    else {
      setError("");
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
    
        console.log(values, "valuessssss");
        setValues("")
        Navigate("/page");

      } catch (error) {
        alert("error");
      }
    };
  }


  const Navigate = useNavigate();

  return (
    <div className="w-[500px] h-[470px] box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) shadow-md bg-[#fff] rounded-lg">
     

      <h2 className="font-bold text-[#575DFB] text-center text-[25px]">
        Login 
      </h2>
      <div className="flex flex-col justify-center items-center gap-[20px] ">
        <form onSubmit={handleLogin} className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[10px]">
          <Lable labe_text="Email" className="font-bold text-[#24243E] text-center text-[15px]"></Lable>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleValues}
            error={err}
            className="!w-[400px] !h-[20px]"
          />
           <Lable labe_text="Password" className="font-bold text-[#24243E] text-center text-[15px]"></Lable>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleValues}
            error={error}
            className="!w-[400px] !h-[20px]"
          />
          </div>
         <div>
         <Button btn_type="submit" btn_name="Submit" onClick={handleLogin} className="bg-[#24243E] w-[400px] h-[40px] border-5 text-[#FFF] rounded-md" />
       
         </div>
         <div>
         <Button btn_type="Signup" btn_name="Signup" className="bg-[#24243E] w-[400px] h-[40px] border-5 text-[#FFF] rounded-md"  onClick={() => Navigate("signup")}/>
         </div>

          </form>
        <div className="flex flex-col gap-[20px]">
         
        </div>
      </div>
    </div>
  );
}

export default Login;
