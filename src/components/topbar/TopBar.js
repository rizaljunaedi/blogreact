import "./topbar.css";
import Logo from '../../images/Logo.png';

export default function TopBar() {
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
          <li className="topListItem">BERANDA</li>
          <li className="topListItem">TENTANG</li>
          <li className="topListItem">KONTAK</li>
          <li className="topListItem">ARIKEL</li>
          <li className="topListItem">KELUAR</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImage" src={Logo} alt="" />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
