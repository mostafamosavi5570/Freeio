import "./ImgBox.css";
import headerbox from "../../img/header-box.png";

export default function Imgbox(){
    return(
        <div className="ImgBox">
            <img src={headerbox} alt="" />
        </div>
    )
}