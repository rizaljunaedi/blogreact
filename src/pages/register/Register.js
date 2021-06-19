import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Daftar</span>
      <form className="registerForm">
        <label>Masukkan Nama</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Input nama anda ..."
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Input email anda ..."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Input password anda ..."
        />
        <button className="registerButton">
          <Link className="link" to="/login">
            MASUK
          </Link>
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/register">
          DAFTAR
        </Link>
      </button>
    </div>
  );
}
