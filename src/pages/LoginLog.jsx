import BackButton from "../components/BackButton";

const LoginLog = () => {


return (
    <>
    
       <div className="login">
        <div className="login-block">
            <input className="login-input" placeholder="Login" type="text" ref={login} />
            <input className="login-input" placeholder="Password" type="password" name="a" id="aaa" ref={pass} />
            <button className="login-button" onClick={checkPass}>Log in</button>
            <BackButton />
        </div>
        <div>
            <img src="../assets/images/cart copy.png" alt=""  style={{width: "200px", height: "200px"}}/>
        </div>
        
    </div>

    </>
  );
};


export default LoginLog;