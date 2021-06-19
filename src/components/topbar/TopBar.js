import { Link } from "react-router-dom";
import "./topbar.css";
import Logo from "../../images/Logo.png";

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-f"></i>
        <i className="topIcon fab fa-instagram"></i>
        <i className="topIcon fab fa-whatsapp"></i>
        <i className="topIcon fab fa-youtube"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              BERANDA
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              TENTANG
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              KONTAK
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/artikel">
              ARTIKEL
            </Link>
          </li>
          <li className="topListItem">
            {user && "KELUAR"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImage" src={Logo} alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                MASUK
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                DAFTAR
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
