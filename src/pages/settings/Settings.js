import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";
import ImgP from "../../images/Profile.jpg";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Perbarui Akun</span>
          <span className="settingsDeleteTitle">Hapus Akun</span>
        </div>
        <form className="settingsForm">
          <label>Gambar Profil</label>
          <div className="settingsPP">
            <img src={ImgP} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPicon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
            <label>Nama Pengguna</label>
            <input type="text" placeholder="Arsyad" />
            <label>Email</label>
            <input type="email" placeholder="Arsyad@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Perbaharui</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
