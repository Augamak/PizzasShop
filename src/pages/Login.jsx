import { useRef, useState } from "react";
import BackButton from "../components/BackButton";
import login from "../store/slices/login";

const Login = () => {
    const [showLogin, setShowLogin] = useState(true)

    const login = useRef(null);
    const pass = useRef(null);

    const initialState = {
        login: 'admin',
        password: 'admin',
        isLogedIn: false
    };

    const checkPass = () => {
        if (
            login.current.value === initialState.value && 
            pass.current.value === initialState.password 
        ) {
            setShowLogin(false);
        } else {
            alert("Wrong password!!")
        }
    }

return (
    <>
    
       <div className="login">
        <div className="login-block">
            <input className="login-input" 
                placeholder="Login" 
                type="text"
                ref={login}
            />
            <input className="login-input" 
                placeholder="Password" 
                type="password" 
                name="a" 
                id="aaa"
                ref={pass} 
            />
            <button className="login-button" onClick={checkPass} >Log in</button>
        </div>
        <div className="back-button">
            <BackButton />
        </div>
        
        
    </div>

    </>
  );
};


export default Login;