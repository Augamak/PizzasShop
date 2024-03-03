import { useRef, useState } from "react";


export const LoginLayout = () => {

  

    const login = useRef(null)
    const pass = useRef(null)

    const creds = {
        login: "admin",
        password: "admin"
    }

    const checkPass = () => {
        if (login.current.value === creds.login &&
            pass.current.value === creds.password
        ) {
        setShowLogin(false);
        }
        else {
            alert("Wrong login or password!!!")
        }
    }

  return (
    <>
    
       <div className="login">
        <div className="login-block">
            <input className="login-input" type="text" ref={login} />
            <input className="login-input" type="password" name="a" id="aaa" ref={pass} />
            <button className="login-button" onClick={checkPass}>Log in</button>
        </div>
        
    </div>

    </>
  );
};