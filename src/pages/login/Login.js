import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Masuk</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Input email anda ..."
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Input password anda ..."
        />
        <button className="loginButton">
          <Link className="link" to="/login">
            MASUK
          </Link>
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          DAFTAR
        </Link>
      </button>
    </div>
  );
}
