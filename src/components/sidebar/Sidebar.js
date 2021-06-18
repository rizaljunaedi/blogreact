import "./sidebar.css";
import Profile from "../../images/Arsyad_Bola.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">TENTANG SAYA</span>
        <img className="sidebarImg" src={Profile} alt="" />
        <p>
          Saya seorang Programmer yang berfokus pada Fullstack Web Developer.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">KATEGORI</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Kemapuan</li>
          <li className="sidebarListItem">Olahraga</li>
          <li className="sidebarListItem">Video</li>
          <li className="sidebarListItem">Teknologi</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSosial">
          <i className="sidebarIcon fab fa-facebook-f"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
          <i className="sidebarIcon fab fa-whatsapp"></i>
          <i className="sidebarIcon fab fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}
