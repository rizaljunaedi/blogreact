import "./post.css";
import imgpost from "../../images/Img1.jpg";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={imgpost} alt="" />
      <div className="postInfo">
        <div className="postKags">
          <span className="postKag">Artikel</span>
          <span className="postKag">Berita</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <div className="postDate">1 jam lalu</div>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        impedit porro architecto earum sit. Non sint eaque, iusto qui, ducimus
        vitae hic facilis culpa asperiores tempora sequi temporibus in! Vel
        doloribus voluptatem eaque eveniet laborum! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Reprehenderit impedit porro architecto
        earum sit. Non sint eaque, iusto qui, ducimus vitae hic facilis culpa
        asperiores tempora sequi temporibus in! Vel doloribus voluptatem eaque
        eveniet laborum! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Reprehenderit impedit porro architecto earum sit. Non sint eaque,
        iusto qui, ducimus vitae hic facilis culpa asperiores tempora sequi
        temporibus in! Vel doloribus voluptatem eaque eveniet laborum!
      </p>
    </div>
  );
}
