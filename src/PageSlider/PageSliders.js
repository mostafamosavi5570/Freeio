import "./PageSliders.css";
import Pageslider from "../img/Pageslider.png"; 
export default function PageSliders(){
    return(
        <div className="pageslider-container">
            <div className="pageslider-text">
                <h1>برخی از صفحات شگفت انگیز قالب</h1>
                <p>با بهره داری از بیش از 1800 مهارت الهام گرفته شده در طراحی وبسایت</p>
            </div>
            <div className="pageslider-pages">
                <ul className="pageslider-ul">
                    <li className="pageslider-li"><a href="#">صفحه خدمات</a></li>
                    <li className="pageslider-li"><a href="#">صفحه پروژه ها</a></li>
                    <li className="pageslider-li"><a href="#">صفحه مشاغل </a></li>
                    <li className="pageslider-li"><a href="#">صفحه فریلنسر</a></li>
                    <li className="pageslider-li"><a href="#">صفحه کارفرما</a></li>
                </ul>
                <img src={Pageslider} alt="" />
            </div>
        </div>
    )
}