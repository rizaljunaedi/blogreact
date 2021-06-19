import "./artikel.css";
import ArtikelImg from "../../images/Img1.jpg";

export default function Artikel() {
  return (
    <div className="artikel">
      <img className="artikelImg" src={ArtikelImg} alt="" />
      <form className="artikelForm">
        <div className="artikelFormGrup">
          <label htmlFor="fileInput">
            <i className="artikelIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Judul"
            className="artikelInput"
            autoFocus={true}
          />
        </div>
        <div className="artikelFormGrup">
          <textarea
            placeholder="Ceritakan Pengalamanmu ..."
            type="text"
            className="artikelInput artikelText"
          ></textarea>
        </div>
        <button className="artikelSubmit">Publish</button>
      </form>
    </div>
  );
}
