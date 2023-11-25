import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">besocial</h3>
                <span className="loginDesc">BeSocial helps you connect and share with the people in your life..</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input className="loginInput" placeholder="Email address or phone number"/>
                    <input type="password" className="loginInput" placeholder="Password"/>
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgotten Password?</span>
                    <hr />
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
