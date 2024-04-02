import { useRef } from "react";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginHandler } from "../store/slices/login"

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {login, password} = useSelector((state) => state.user);

    const loginInput = useRef(null);
    const passInput = useRef(null);

    const checkPass = () => {
        if (
            loginInput.current.value === login && 
            passInput.current.value === password 
        ) {
            dispatch(loginHandler())
            navigate('/')
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
                ref={loginInput}
            />
            <input className="login-input" 
                placeholder="Password" 
                type="password" 
                name="a" 
                id="aaa"
                ref={passInput} 
            />
            <button className="login-button" onClick={checkPass}>Log in</button>
        </div>
        <div className="back-button">
            <BackButton />
        </div>
        
        
    </div>

    </>
  );
};


export default Login;