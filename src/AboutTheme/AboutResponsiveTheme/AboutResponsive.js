import "./AboutResponsive.css";
import Responsive from "../../img/Responsive.png";

export default function AbouteResponsive() {
    return (
        <div className="abouteresponsive">
            <div className="abouteresponsive-img">
                <img src={Responsive} alt="" width={700} />
            </div>
            <div className="abouteresponsive-text">
                <h1>کاملا ریسپانسیو با موبایل</h1>
                <p>قالب فیریو کاملاً با تمامی پلتفرم ها از جمله موبایل ، تبلت ، دسکتاپ و ... ریسپانسیو میباشد به گونه ای که کاربران شما به راحتی با وب سایت ارتباط برقرار خواهند کرد..</p>
            </div>
        </div>
    )
}