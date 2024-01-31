import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";
import Lable from "./Lable";

function Signup() {
    const [values, setValues] = useState({
        email: "",
        password: "",
        Confirmpassword: "",
    });

    const [error, setError] = useState("");
    const [err, setErr] = useState("");

    const handleValues = (e) => {
        if (e.target.name === "email") {
            setValues((prev) => ({ ...prev, email: e.target.value }));
        } else if (e.target.name === "password") {
            setValues((prev) => ({ ...prev, password: e.target.value }));
        } else if (e.target.name === "Confirmpassword") {
            setValues((prev) => ({ ...prev, Confirmpassword: e.target.value }));
        }
    };
    console.log(values, "values");

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!values.email) {
            setErr("Enter the Email");
        } else if (!values.email.includes("@")) {
            setErr("Please enter the valid email");
        } else {
            setErr("");
        }

        if (values.password !== values.Confirmpassword) {
            setError("Passwords did not match");
        } else {
            if (!values.password && !values.Confirmpassword) {
                setError("Enter the password ");
            } else if (
                values.password.length < 6 &&
                values.Confirmpassword.length < 6
            ) {
                setError("Passwords should be at least 6 characters long");
            }
          
            else {
                setError("");
                try {
                    await createUserWithEmailAndPassword(
                        auth,
                        values.email,
                        values.password,
                        values.Confirmpassword
                    );

                } catch (error) {

                    console.log("error", error);
                }
            }
        }
    };




    return (
        <div>
            <div className="w-[490px] h-[470px] box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) shadow-md bg-[#fff] rounded-lg">
                <h2 className="font-bold text-[#575DFB] text-center text-[25px] ">Register</h2>
                <h2 className="font-bold text-[#24243E] text-left text-[20px] w-[400px] ml-[40px]">Create a account </h2>
                <div className="flex flex-col justify-center items-center gap-[20px] ">
                    <form onSubmit={handleSignup} className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[10px]">
                            < Lable labe_text="Email" className="font-bold text-[#24243E] text-center text-[15px]"></Lable>
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
                            <Lable labe_text=" Confirm Password" className="font-bold text-[#24243E] text-center text-[15px]"></Lable>
                            <Input
                                placeholder=" Confirm Password"
                                type="password"
                                name="Confirmpassword"
                                onChange={handleValues}
                                error={error}
                                className="!w-[400px] !h-[20px]"
                            />
                        </div>
                        <div>
                            <Button btn_type="submit" btn_name="continue" onClick={handleSignup} />
                        </div>

                    </form>
                </div>



            </div>
        </div>

    );
}

export default Signup;
