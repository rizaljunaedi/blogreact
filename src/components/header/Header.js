import "./header.css";
import img2 from "../../images/Img4.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Rizal Junaedi</span>
        <span className="headerTitleLg">Website & Blog</span>
      </div>
      <img className="headerImg" src={img2} alt="" />
    </div>
  );
}
