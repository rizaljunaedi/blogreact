import "./singlePost.css";
import image from "../../images/Img1.jpg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={image} alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Penulis: <b>Arsyad</b></span>
            <span className="singlePostDate">1 jam lalu</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti libero ipsum tenetur excepturi, nostrum quaerat, provident numquam soluta in rerum reiciendis. Rerum, fuga, quia, blanditiis sint ipsum quasi libero eaque eos odit molestiae perspiciatis voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti libero ipsum tenetur excepturi, nostrum quaerat, provident numquam soluta in rerum reiciendis. Rerum, fuga, quia, blanditiis sint ipsum quasi libero eaque eos odit molestiae perspiciatis voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti libero ipsum tenetur excepturi, nostrum quaerat, provident numquam soluta in rerum reiciendis. Rerum, fuga, quia, blanditiis sint ipsum quasi libero eaque eos odit molestiae perspiciatis voluptatum.
        </p>
      </div>
    </div>
  );
}
