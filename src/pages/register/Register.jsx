import "./register.css"
export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo"> BeSocial</h3>
                <span className="loginDesc">Connect with friends and the world around you on BeSocial.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input className="loginInput" placeholder="Username"/>
                    <input className="loginInput" placeholder="Email"/>
                    <input type="password" className="loginInput" placeholder="Password"/>
                    <input type="password" className="loginInput" placeholder="Password Again"/>
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
